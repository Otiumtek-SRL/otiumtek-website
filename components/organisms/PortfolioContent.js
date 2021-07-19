import PropTypes from 'prop-types'
import Search from '../molecules/Search'
import WorkCard from '../molecules/WorkCard'
import Pagination from '../molecules/Pagination'

const PortfolioContent = ({ search, works, currentPage, totalPage }) => {
    return (
        <>
            <div className="mb-10">
                <Search search={search} />
            </div>
            <div>
                {works.map((item, index) => <WorkCard key={item.slug} index={index} {...item} />)}
            </div>
            <div>
                <Pagination currentPage={currentPage} totalPage={totalPage} type="portfolio" />
            </div>
        </>
    )
}

PortfolioContent.propTypes = {
    search: PropTypes.object.isRequired,
    works: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
}


export default PortfolioContent