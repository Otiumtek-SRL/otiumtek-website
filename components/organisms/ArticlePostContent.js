import PropTypes from 'prop-types'
import ArticleContent from '../molecules/ArticleContent'
import Search from '../molecules/Search'
import RelatedPost from '../molecules/RelatedPost'

const ArticlePostContent = ({ article, search, relatedPosts }) => {
    return (
        <div className="flex flex-wrap">
            <ArticleContent article={article} />
            <div className="w-full md:w-1/3 md:pl-5">
                <div className="hidden md:block">
                    <Search search={search}/>
                </div>
                <div className="mt-8">
                    <RelatedPost posts={relatedPosts} />
                </div>
            </div>
        </div>
    )
}

ArticlePostContent.propTypes = {
    article: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    relatedPosts: PropTypes.array.isRequired,
}


export default ArticlePostContent