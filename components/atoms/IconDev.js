import PropTypes from 'prop-types'
import classnames from 'classnames'

const IconDev = ({ name }) => {
    return (
        <div className="w-3/12 md:w-1/12 flex justify-center">
            <i className={classnames('text-6xl text-gray-200 hover:text-primary transition duration-300', name)}></i>
        </div>
    )
}

IconDev.propTypes = {
    name: PropTypes.any.isRequired,
}

export default IconDev
