export default class Helper {

    static calculatePages(total, pageSize) {
        let pages = Math.floor(total / pageSize)
        if(pages == 0 || (pages > 0 && total % pageSize > 0)) {
            pages++
        }
        return pages
    }

}