import PropTypes from 'prop-types'
import MemberContent from '../molecules/MemberContent'
import Search from '../molecules/Search'
import RelatedPost from '../molecules/RelatedPost'

const MemberPostContent = ({ member, search, relatedPosts }) => {
    return (
        <div className="flex flex-wrap">
            <MemberContent member={member} />
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

MemberPostContent.propTypes = {
    member: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    relatedPosts: PropTypes.array.isRequired,
}


export default MemberPostContent