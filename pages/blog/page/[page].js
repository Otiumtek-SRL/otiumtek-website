import BlogTemplate from '../../../components/templates/blog'
import LandingLayout from '../../../components/layouts/landing'
import ContentfulApi from '../../../utils/ContentfulApi'
import Config from '../../../utils/Config'

const BlogPage = ({ articles, infoLandingPage }) => {
    return (
        <BlogTemplate
            infoLandingPage={infoLandingPage}
            articles={articles}
        />
    )
}

export async function getStaticPaths({ locales }) {
    let total = await ContentfulApi.getTotalPosts("Work")
    let pages = Math.floor(total / Config.pagination.pageSize);
    if (pages == 0) {
        pages++;
    }
    if(pages > 0 && total % Config.pagination.pageSize > 0) {
        pages++;
    }
    let paths = []
    for(let locale of locales) {
        for(let i = 0; i < pages ; i++) {
            paths = paths.concat([{params: { page: `${i + 1}` }, locale }])
        }
    }
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {

    const infoLandingPage = await ContentfulApi.getInfoPage(locale)
    const data = await ContentfulApi.getArticlesPagination(locale, (params.page - 1) * Config.pagination.pageSize, Config.pagination.pageSize)

    return {
      props: {
        messages: require(`../../../locales/${locale}.json`),
        isLanding: false,
        infoLandingPage,
        title: infoLandingPage.sectionBlogTitle,
        description: "",
        articles: data.items
      }
    }
}

BlogPage.layout = LandingLayout

export default BlogPage