import PropTypes from 'prop-types'
import WorkContent from '../molecules/WorkContent'
import Search from '../molecules/Search'
import RelatedPost from '../molecules/RelatedPost'

const WorkPostContent = ({ work, search, relatedPosts }) => {
    return (
        <div className="flex flex-wrap">
            <WorkContent work={work} />
            <div className="w-full md:w-1/3 md:pl-5">
                <div className="hidden md:block">
                    <Search search={search} />
                </div>
                <div className="mt-8">
                    <RelatedPost posts={relatedPosts} />
                </div>
            </div>
        </div>
    )
}

WorkPostContent.propTypes = {
    work: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    relatedPosts: PropTypes.array.isRequired,
}


export default WorkPostContent