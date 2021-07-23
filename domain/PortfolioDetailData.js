import ContentfulApi from '../utils/ContentfulApi'
import SearchData from './SearchData'
import MessageData from './MessageData'

export default class PortfolioDetailData {

    static async getPaths(locales) {
        let slugs = await ContentfulApi.getSlugs("Work")
        let paths = []
        for (let locale of locales) {
            for(let slug of slugs) {
                paths = paths.concat([{ params: { slug }, locale }])
            }
        }
        return paths;
    }

    static async getProperties(locale, params) {
        const work = await ContentfulApi.getPostBySlug(locale, params.slug)
        
        return {
            infoLandingPage: await ContentfulApi.getInfoPage(locale),
            work,
            relatedPosts: await ContentfulApi.getPostsRelated(['Work'], work.contentfulMetadata.tags.map(item => item.id), work.slug),
            ...MessageData.getProperties(locale),
            ...await SearchData.getProperties()
        }
    }

}