import PropTypes from 'prop-types'
import BlogHeader from '../organisms/BlogHeader'
import BlogContent from '../organisms/BlogContent'

const BlogTemplate = ({ infoLandingPage, search, articles, currentPage, totalPage }) => {

    return (
        <div className="py-10 p-5 md:px-20">
            <div className="header">
                <BlogHeader infoLandingPage={infoLandingPage} />
            </div>
            <div className="content">
                <BlogContent 
                    search={search} 
                    articles={articles} 
                    currentPage={currentPage} 
                    totalPage={totalPage} 
                />
            </div>
        </div>
    )
}

BlogTemplate.propTypes = {
    articles: PropTypes.array.isRequired,
    infoLandingPage: PropTypes.object.isRequired,
}

export default BlogTemplate
