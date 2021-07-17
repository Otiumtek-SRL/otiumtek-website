import PortfolioTemplate from '../../../components/templates/portfolio'
import LandingLayout from '../../../components/layouts/landing'
import ContentfulApi from '../../../utils/ContentfulApi'
import Config from '../../../utils/Config'
import Helper from '../../../utils/Helper'

const PortfolioPage = ({ works, infoLandingPage, currentPage, totalPage }) => {
    return (
        <PortfolioTemplate
            infoLandingPage={infoLandingPage}
            works={works}
            currentPage={currentPage}
            totalPage={totalPage}
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
    const data = await ContentfulApi.getWorkPagination(locale, (params.page - 1) * Config.pagination.pageSize, Config.pagination.pageSize)
    let totalPage = Helper.calculatePages(data.total, Config.pagination.pageSize)

    return {
      props: {
        messages: require(`../../../locales/${locale}.json`),
        isLanding: false,
        infoLandingPage,
        title: infoLandingPage.sectionPortafolioTitle,
        description: "",
        currentPage: parseInt(params.page),
        totalPage,
        works: data.items
      }
    }
}

PortfolioPage.layout = LandingLayout

export default PortfolioPage