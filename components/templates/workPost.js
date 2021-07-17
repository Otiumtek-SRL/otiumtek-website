import PropTypes from 'prop-types'
import Breadcrumb from '../organisms/breadcrumb'
import WorkContent from '../organisms/workContent'
import RelatedPost from '../organisms/relatedPost'
import Search from '../organisms/search'

const WorkDetailTemplate = ({ work, relatedPosts, search }) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <Breadcrumb page="portfolio"  postTitle={work.title} />
            <div className="md:hidden mb-10">
                <Search search={search} />
            </div>
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
        </div>
        
    ) 
}

WorkDetailTemplate.propTypes = {
    work: PropTypes.object.isRequired,
    relatedPosts: PropTypes.array
}

export default WorkDetailTemplate