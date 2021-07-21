import PropTypes from 'prop-types'
import classnames from 'classnames'

const IconDev = ({ name }) => {
    return (
        <i className={classnames('text-6xl text-gray-200 hover:text-primary transition duration-300', name)}></i>
    )
}

IconDev.propTypes = {
    name: PropTypes.any.isRequired,
}

export default IconDev
