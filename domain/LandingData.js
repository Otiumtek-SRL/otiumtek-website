import ContentfulApi from '../utils/ContentfulApi'
import MessageData from './MessageData'

export default class LandingData {

    static async getProperties(locale) {
        return {
            isLanding: true,
            infoLandingPage: await ContentfulApi.getInfoPage(locale),
            services: await ContentfulApi.getServicesLanding(locale),
            works: await ContentfulApi.getWorkLanding(locale),
            articles: await ContentfulApi.getArticlesLanding(locale),
            members: await ContentfulApi.getMembersLanding(locale),
            ...MessageData.getProperties(locale)
        }
    }

}