import PropTypes from 'prop-types'
import Breadcrumb from '../molecules/Breadcrumb'
import SectionHeader from '../molecules/SectionHeader'

const PortfolioHeader = ({ infoLandingPage }) => {
    return (
        <>
            <Breadcrumb page="portfolio" />
            <div className="mb-10">
                <SectionHeader 
                    title={infoLandingPage.sectionPortafolioTitle}
                    description={infoLandingPage.sectionPortafolioDescription}
                />
            </div>
        </>
    )
}

PortfolioHeader.propTypes = {
    infoLandingPage: PropTypes.object.isRequired,
}


export default PortfolioHeader