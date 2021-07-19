export default class MessageData {

    static getProperties (locale) {
        return {
            messages: require(`../locales/${locale}.json`)
        }
    }

}