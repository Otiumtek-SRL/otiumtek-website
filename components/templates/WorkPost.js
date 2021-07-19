import PropTypes from 'prop-types'
import WorkPostHeader from '../organisms/WorkPostHeader'
import WorkPostContent from '../organisms/WorkPostContent'

const WorkDetailTemplate = ({ work, relatedPosts, search }) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <div className="header">
                <WorkPostHeader work={work} search={search} />
            </div>
            <div className="content">
                <WorkPostContent work={work} search={search} relatedPosts={relatedPosts}/>  
            </div>
        </div>
        
    ) 
}

WorkDetailTemplate.propTypes = {
    work: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    relatedPosts: PropTypes.array,
}

export default WorkDetailTemplate
