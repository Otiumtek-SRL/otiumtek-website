import PropTypes from 'prop-types'
import MemberPostHeader from '../organisms/MemberPostHeader'
import MemberPostContent from '../organisms/MemberPostContent'

const MemberDetailTemplate = ({ member, relatedPosts, search }) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <div className="header">
                <MemberPostHeader member={member} search={search} />
            </div>
            <div className="content">
                <MemberPostContent member={member} search={search} relatedPosts={relatedPosts}/>  
            </div>
        </div>
        
    ) 
}

MemberDetailTemplate.propTypes = {
    member: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
}

export default MemberDetailTemplate
