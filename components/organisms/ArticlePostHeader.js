import PropTypes from 'prop-types'
import Breadcrumb from '../molecules/Breadcrumb'
import Search from '../molecules/Search'

const ArticlePostHeader = ({ article, search }) => {
    return (
        <>
            <Breadcrumb page="blog"  postTitle={article.title} />
            <div className="md:hidden mb-10">
                <Search search={search} />
            </div>
        </>
    )
}

ArticlePostHeader.propTypes = {
    article: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
}

export default ArticlePostHeader