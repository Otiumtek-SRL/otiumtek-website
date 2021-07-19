import PropTypes from 'prop-types'
import ArticlePostHeader from '../organisms/ArticlePostHeader'
import ArticlePostContent from '../organisms/ArticlePostContent'

const ArticleDetailTemplate = ({article, search, relatedPosts}) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <div className="header">
                <ArticlePostHeader search={search} article={article} />
            </div>
            <div className="content">
                <ArticlePostContent search={search} article={article} relatedPosts={relatedPosts} />
            </div>
        </div>
    ) 
}

ArticleDetailTemplate.propTypes = {
    article: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    relatedPosts: PropTypes.array
}

export default ArticleDetailTemplate