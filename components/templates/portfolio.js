import PropTypes from 'prop-types'
import PortfolioHeader from '../organisms/PortfolioHeader'
import PortfolioContent from '../organisms/PortfolioContent'

const PortfolioTemplate = ({ infoLandingPage, search, works, currentPage, totalPage }) => {
    return (
        <div className="py-10 p-5 md:px-20">
            <div className="header">
                <PortfolioHeader infoLandingPage={infoLandingPage} />
            </div>
            <div className="content">
                <PortfolioContent 
                    search={search} 
                    works={works} 
                    currentPage={currentPage} 
                    totalPage={totalPage} 
                />
            </div>
        </div>
    )
}

PortfolioTemplate.propTypes = {
    infoLandingPage: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    works: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
}

export default PortfolioTemplate