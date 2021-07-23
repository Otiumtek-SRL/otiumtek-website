import ContentfulApi from '../utils/ContentfulApi'
import Config from '../utils/Config'
import Helper from '../utils/Helper'
import SearchData from './SearchData'
import MessageData from './MessageData'

export default class PortfolioData {

    static async getPaths (locales) {
        let total = await ContentfulApi.getTotalPosts("Work")
        let pages = Helper.calculatePages(total, Config.pagination.pageSize)
        let paths = []
        for(let locale of locales) {
            for(let i = 0; i < pages ; i++) {
                paths = paths.concat([{params: { page: `${i + 1}` }, locale }])
            }
        }
        return paths
    }

    static async getProperties(locale, params) {
        const infoLandingPage = await ContentfulApi.getInfoPage(locale)
        const data = await ContentfulApi.getWorkPagination(locale, (params.page - 1) * Config.pagination.pageSize, Config.pagination.pageSize)
        let totalPage = Helper.calculatePages(data.total, Config.pagination.pageSize)

        return {
            isLanding: false,
            infoLandingPage,
            currentPage: parseInt(params.page),
            totalPage,
            works: data.items,
            ...MessageData.getProperties(locale),
            ...await SearchData.getProperties()
        }
    }

}