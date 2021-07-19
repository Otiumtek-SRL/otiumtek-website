import ContentfulApi from '../utils/ContentfulApi'

export default class SearchData {

    static async getProperties () {
        return {
            search : {
                en: await ContentfulApi.getPostsForSearch('en'),
                es: await ContentfulApi.getPostsForSearch('es')
            }
        }
    }

}