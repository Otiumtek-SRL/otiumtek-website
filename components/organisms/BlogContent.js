import PropTypes from 'prop-types'
import Search from '../molecules/Search'
import ArticleCard from '../molecules/ArticleCard'
import Pagination from '../molecules/Pagination'

const BlogContent = ({ search, articles, currentPage, totalPage }) => {
    console.log(articles)
    return (
        <>
            <div className="mb-10">
                <Search search={search} />
            </div>
            <div className="flex flex-wrap">
                {articles.map(item => <ArticleCard key={item.slug} {...item} />)}
            </div>
            <div>
                <Pagination currentPage={currentPage} totalPage={totalPage} type="blog" />
            </div>
        </>
    )
}

BlogContent.propTypes = {
    search: PropTypes.object.isRequired,
    articles: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
}


export default BlogContent