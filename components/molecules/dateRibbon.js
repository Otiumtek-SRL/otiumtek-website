import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const DateRibbon = ({ date }) => {

    const t = useTranslations('site')

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