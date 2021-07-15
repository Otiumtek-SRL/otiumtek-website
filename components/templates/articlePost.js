import PropTypes from 'prop-types'
import Breadcrumb from '../organisms/breadcrumb'
import ArticleContent from '../organisms/articleContent'
import RelatedPost from '../organisms/relatedPost'
import Search from '../organisms/search'

const ArticleDetailTemplate = ({article, relatedPosts}) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <Breadcrumb page="blog" postTitle={article.title} />
            <div className="md:hidden mb-10">
                <Search />
            </div>
            <div className="flex flex-wrap">
                <ArticleContent article={article} />
                <div className="w-full md:w-1/3 md:pl-5">
                    <div className="hidden md:block">
                        <Search />
                    </div>
                    <div className="mt-8">
                        <RelatedPost posts={relatedPosts} />
                    </div>
                </div>
            </div>
        </div>
        
    ) 
}

ArticleDetailTemplate.propTypes = {
    article: PropTypes.object.isRequired,
    relatedPosts: PropTypes.array
}

export default ArticleDetailTemplate