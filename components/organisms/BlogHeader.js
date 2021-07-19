import PropTypes from 'prop-types'
import Breadcrumb from '../molecules/Breadcrumb'
import SectionHeader from '../molecules/SectionHeader'

const BlogHeader = ({ infoLandingPage }) => {
    return (
        <>
            <Breadcrumb page="blog" />
            <div className="mb-10">
                <SectionHeader 
                    title={infoLandingPage.sectionBlogTitle}
                    description={infoLandingPage.sectionBlogDescription}
                />
            </div>
        </>
    )
}

BlogHeader.propTypes = {
    infoLandingPage: PropTypes.object.isRequired,
}


export default BlogHeader