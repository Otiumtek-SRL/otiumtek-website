import PropTypes from 'prop-types'

const Numeric = ({ number }) => {
    return <span className="absolute text-8xl right-3 opacity-25 text-gray-400">{number.toString().padStart(2, '0')}.</span>
}

Numeric.propTypes = {
    number: PropTypes.any.isRequired,
}

export default Numeric