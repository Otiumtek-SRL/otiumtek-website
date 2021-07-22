import ContentfulApi from '../utils/ContentfulApi'
import SearchData from './SearchData'
import MessageData from './MessageData'

export default class TeamDetailData {

    static async getPaths(locales) {
        let slugs = await ContentfulApi.getSlugs("Team")
        let paths = []
        for (let locale of locales) {
            for(let slug of slugs) {
                paths = paths.concat([{ params: { slug }, locale }])
            }
        }
        return paths;
    }

    static async getProperties(locale, params) {
        const member = await ContentfulApi.getPostBySlug(locale, params.slug)
        const [title, position] = member.title.split(';')
        member.title = title
        member.position = position

        return {
            infoLandingPage: await ContentfulApi.getInfoPage(locale),
            member,
            relatedPosts: await ContentfulApi.getPostsRelated('Articles', member.contentfulMetadata.tags.map(item => item.id), member.slug),
            ...MessageData.getProperties(locale),
            ...await SearchData.getProperties()
        }
    }

}