import PortfolioTemplate from '../../../components/templates/portfolio'
import LandingLayout from '../../../components/layouts/Landing'
import PortfolioData from '../../../domain/PortfolioData'

const PortfolioPage = ({ works, infoLandingPage, currentPage, totalPage, search }) => {
    return (
        <PortfolioTemplate
            infoLandingPage={infoLandingPage}
            works={works}
            currentPage={currentPage}
            totalPage={totalPage}
            search={search}
        />
    )
}

export async function getStaticPaths({ locales }) {
    return {
        paths: await PortfolioData.getPaths(locales),
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {
    const props = await PortfolioData.getProperties(locale, params)

    return {
      props: {
        title: props.infoLandingPage.sectionPortafolioTitle,
        description: props.infoLandingPage.sectionPortafolioDescription,
        ...props
      }
    }
}

PortfolioPage.layout = LandingLayout

export default PortfolioPage