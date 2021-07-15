import PropTypes from 'prop-types'
import Header from '../organisms/header'
import Service from '../organisms/serviceLanding'
import Porfolio from '../organisms/portfolioLanding'
import Blog from '../organisms/blogLanding'

const LandingTemplate = ({ infoLandingPage, services, works, articles }) => {

    const { 
        slogan, subslogan, 
        sectionServiceTitle, sectionServiceDescription,
        sectionPortafolioTitle, sectionPortafolioDescription,
        sectionBlogTitle, sectionBlogDescription
    } = infoLandingPage

    return (
        <div className="main">
            <Header
                slogan={slogan}
                subslogan={subslogan} 
            />
            <Service 
                title={sectionServiceTitle} 
                description={sectionServiceDescription} 
                services={services} 
            />
            <Porfolio 
                title={sectionPortafolioTitle} 
                description={sectionPortafolioDescription}
                works={works} 
            />
            <Blog 
                title={sectionBlogTitle} 
                description={sectionBlogDescription}
                articles={articles}
            />
        </div>
    )
}

LandingTemplate.propTypes = {
  infoLandingPage: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
}

export default LandingTemplate