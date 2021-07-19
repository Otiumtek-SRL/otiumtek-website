import PropTypes from 'prop-types'
import SectionHeader from '../molecules/SectionHeader'
import ServiceCard from '../molecules/ServiceCard'

const ServiceLanding = ({ title, description, services}) => {

    return (
        <div id="services" className="flex items-center py-20 px-5 lg:px-40 flex-col bg-gray-100">
            <SectionHeader 
                title={title}
                description={description}
            />
            <div className="flex flex-wrap mt-10">
                {services.map((item, index) => <ServiceCard key={index} {...item} />)}
            </div>
        </div>
    )
}

ServiceLanding.propTypes = {
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    services: PropTypes.array.isRequired,
}
  
export default ServiceLanding
