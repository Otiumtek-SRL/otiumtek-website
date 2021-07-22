import PropTypes from 'prop-types'

const DateLine = ({ date }) => {

    return (
        <span>{date && new Date(date).toLocaleDateString()}</span>
    )
}

DateLine.propTypes = {
    date: PropTypes.any.isRequired,
}

export default DateLine
