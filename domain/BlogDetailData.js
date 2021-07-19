import ContentfulApi from '../utils/ContentfulApi'
import SearchData from './SearchData'
import MessageData from './MessageData'

export default class BlogDetailData {

    static async getPaths (locales) {
        let slugs = await ContentfulApi.getSlugs("Article")
        let paths = []
        for (let locale of locales) {
            for(let slug of slugs) {
                paths = paths.concat([{params: { slug }, locale }])
            }
        }
        return paths;
    }

    static async getProperties(locale, params) {
        const article = await ContentfulApi.getPostBySlug(locale, params.slug)

        return {
            infoLandingPage: await ContentfulApi.getInfoPage(locale),
            article,
            relatedPosts: await ContentfulApi.getPostsRelated('Article', article.contentfulMetadata.tags.map(item => item.id), article.slug),
            ...MessageData.getProperties(locale),
            ...await SearchData.getProperties()
        }
    }

}