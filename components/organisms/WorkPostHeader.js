import PropTypes from 'prop-types'
import Breadcrumb from '../molecules/Breadcrumb'
import Search from '../molecules/Search'

const WorkPostHeader = ({ work, search }) => {
    return (
        <>
            <Breadcrumb page="portfolio"  postTitle={work.title} />
            <div className="md:hidden mb-10">
                <Search search={search} />
            </div>
        </> 
    )
}

WorkPostHeader.propTypes = {
    work: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
}

export default WorkPostHeader