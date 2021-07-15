import PropTypes from 'prop-types'
import { useTranslation } from 'next-i18next'

const DateRibbon = ({ date }) => {

    const { t } = useTranslation('common')

    return (
        <div className="hidden md:block bg-primary absolute text-white p-2 text-center -left-10 top-1">
            <div className="text-sm">{t(`month-${date.getMonth() + 1}`)}</div>
            <div className="text-xl font-bold">{date.getDate()}</div>
            <div className="text-sm">{date.getFullYear()}</div>
        </div>
    )
}

DateRibbon.propTypes = {
    date: PropTypes.any.isRequired,
}

export default DateRibbon