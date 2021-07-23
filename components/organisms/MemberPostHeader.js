import PropTypes from 'prop-types'
import Breadcrumb from '../molecules/Breadcrumb'
import Search from '../molecules/Search'

const MemberPostHeader = ({ member, search }) => {
    return (
        <>
            <Breadcrumb  postTitle={member.title} />
            <div className="md:hidden mb-10">
                <Search search={search} />
            </div>
        </> 
    )
}

MemberPostHeader.propTypes = {
    member: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
}

export default MemberPostHeader