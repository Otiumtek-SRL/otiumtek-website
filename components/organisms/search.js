import PropTypes from 'prop-types'
import { useTranslation } from 'next-i18next'

const Search = () => {

    const { t } = useTranslation('common')

    return (
        <input type="search" placeholder={t('search')} className="bg-gray-100 w-full p-3 rounded" />
    )
}

export default Search