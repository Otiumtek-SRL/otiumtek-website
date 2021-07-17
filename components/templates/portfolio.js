import PropTypes from 'prop-types'
import Breadcrumb from '../organisms/breadcrumb'
import Search from '../organisms/search'
import Pagination from '../molecules/pagination'
import SectionHeader from '../molecules/sectionHeader'
import WorkCard from '../molecules/workCard'

const PortfolioTemplate = ({ works, infoLandingPage, currentPage, totalPage }) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <div className="header">
                <Breadcrumb page="portfolio" />
                <div className="mb-10">
                    <SectionHeader 
                        title={infoLandingPage.sectionPortafolioTitle}
                        description={infoLandingPage.sectionPortafolioDescription}
                    />
                </div>
            </div>
            <div className="content">
                <div className="mb-10">
                    <Search />
                </div>
                <div>
                    {works.map((item, index) => <WorkCard key={item.slug} index={index} {...item} />)}
                </div>
            </div>  
            <div className="pagination">
                <Pagination currentPage={currentPage} totalPage={totalPage} type="portfolio" />
            </div>
        </div>
    )
}

PortfolioTemplate.propTypes = {
    works: PropTypes.array.isRequired,
    infoLandingPage: PropTypes.object.isRequired,
}

export default PortfolioTemplate