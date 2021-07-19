import BlogTemplate from '../../../components/templates/blog'
import LandingLayout from '../../../components/layouts/landing'
import BlogData from '../../../domain/BlogData'

const BlogPage = ({ articles, infoLandingPage, currentPage, totalPage, search }) => {
    return (
        <BlogTemplate
            infoLandingPage={infoLandingPage}
            articles={articles}
            currentPage={currentPage}
            totalPage={totalPage}
            search={search}
        />
    )
}

export async function getStaticPaths({ locales }) {
    return {
        paths: await BlogData.getPaths(locales),
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {
    const props = await BlogData.getProperties(locale, params)

    return {
      props: {
        title: props.infoLandingPage.sectionBlogTitle,
        description: props.infoLandingPage.sectionBlogDescription,
        ...props
      }
    }
}

BlogPage.layout = LandingLayout

export default BlogPage