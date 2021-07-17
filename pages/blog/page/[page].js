import BlogTemplate from '../../../components/templates/blog'
import LandingLayout from '../../../components/layouts/landing'
import ContentfulApi from '../../../utils/ContentfulApi'
import Config from '../../../utils/Config'
import Helper from '../../../utils/Helper'

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
    let total = await ContentfulApi.getTotalPosts("Article")
    let pages = Helper.calculatePages(total, Config.pagination.pageSize)
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
    let totalPage = Helper.calculatePages(data.total, Config.pagination.pageSize)
    let search = {
        en: await ContentfulApi.getPostsForSearch('en'),
        es: await ContentfulApi.getPostsForSearch('es')
    }

    return {
      props: {
        messages: require(`../../../locales/${locale}.json`),
        isLanding: false,
        infoLandingPage,
        title: infoLandingPage.sectionBlogTitle,
        description: "",
        currentPage: parseInt(params.page),
        totalPage,
        articles: data.items,
        search
      }
    }
}

BlogPage.layout = LandingLayout

export default BlogPage