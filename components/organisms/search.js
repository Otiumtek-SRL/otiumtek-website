import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Search = () => {

    const t = useTranslations('site')

    return (
        <input type="search" placeholder={t('search')} className="bg-gray-100 w-full p-3 rounded" />
    )
}

export default Search