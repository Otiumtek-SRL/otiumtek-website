import PropTypes from 'prop-types'
import Breadcrumb from '../organisms/breadcrumb'
import Search from '../organisms/search'
import Pagination from '../organisms/pagination'
import SectionHeader from '../molecules/sectionHeader'
import ArticleCard from '../molecules/articleCard'

const BlogTemplate = ({ articles, infoLandingPage }) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <div className="header">
                <Breadcrumb page="blog" />
                <div className="mb-10">
                    <SectionHeader 
                        title={infoLandingPage.sectionBlogTitle}
                        description={infoLandingPage.sectionBlogDescription}
                    />
                </div>
            </div>
            <div className="content">
                <div className="mb-10">
                    <Search />
                </div>
                <div className="flex flex-wrap">
                    {articles.map(item => <ArticleCard key={item.slug} {...item} />)}
                </div>
            </div>  
            <div className="pagination">
                <Pagination />
            </div>
        </div>
    )
}

BlogTemplate.propTypes = {
    articles: PropTypes.object.isRequired,
    infoLandingPage: PropTypes.object.isRequired,
}

export default BlogTemplate