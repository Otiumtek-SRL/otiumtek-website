import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'
import LinkButton from '../atoms/LinkButton'

const Pagination = ({ currentPage, totalPage, type }) => {

    const t = useTranslations('site')

    if(currentPage == totalPage)
    {
        return null
    }

    return (
        <div className="flex justify-center">
            <div className="mr-3">
                <LinkButton text={t('pagination-prev')} disabled={currentPage - 1 < 1} link={`/${type}/page/${currentPage - 1}`} />
            </div>
            <div className="ml-3">
                <LinkButton text={t('pagination-next')} disabled={currentPage + 1 > totalPage} link={`/${type}/page/${currentPage + 1}`} />
            </div>
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.any.isRequired,
    totalPage: PropTypes.any.isRequired,
    type: PropTypes.any.isRequired,
}

export default Pagination