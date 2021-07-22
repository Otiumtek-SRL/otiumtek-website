import PropTypes from 'prop-types'
import Header from '../organisms/HeaderLanding'
import Service from '../organisms/ServiceLanding'
import Portfolio from '../organisms/PortfolioLanding'
import Blog from '../organisms/BlogLanding'
import Team from '../organisms/TeamLanding'

const LandingTemplate = ({ infoLandingPage, services, works, articles, members }) => {

    const { 
        slogan, subslogan, 
        sectionServiceTitle, sectionServiceDescription,
        sectionPortafolioTitle, sectionPortafolioDescription,
        sectionBlogTitle, sectionBlogDescription,
        sectionTeamTitle, sectionTeamDescription
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
            <Portfolio 
                title={sectionPortafolioTitle} 
                description={sectionPortafolioDescription}
                works={works} 
            />
            <Blog 
                title={sectionBlogTitle} 
                description={sectionBlogDescription}
                articles={articles}
            />
            <Team 
                title={sectionTeamTitle} 
                description={sectionTeamDescription}
                members={members} 
            />
        </div>
    )
}

LandingTemplate.propTypes = {
    infoLandingPage: PropTypes.object.isRequired,
    services: PropTypes.array.isRequired,
    works: PropTypes.array.isRequired,
    articles: PropTypes.array.isRequired,
    members: PropTypes.array.isRequired
}

export default LandingTemplate
