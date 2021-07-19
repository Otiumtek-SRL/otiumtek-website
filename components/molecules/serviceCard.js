import PropTypes from 'prop-types'
import Numeric from '../atoms/Numeric'

const ServiceCard = ({title, description, sorted}) => {
    return (
        <div className="w-full md:w-1/3">
            <div className="flex items-center flex-col p-5 relative">
                <Numeric number={sorted} />
                <h3 className="text-lg text-center font-bold uppercase mb-3">{title}</h3>
                <div className="text-justify">{description}</div>
            </div>
        </div>
    )
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sorted: PropTypes.number.isRequired,
}

export default ServiceCard