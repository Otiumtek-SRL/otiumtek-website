import LandingLayout from '../../components/layouts/landing'
import WorkTemplate from '../../components/templates/workPost'
import PortfolioDetailData from '../../domain/PortfolioDetailData'

const WorkDetailPage = ({ work, relatedPosts, search }) => {

    return (
        <WorkTemplate
            work={work}
            relatedPosts={relatedPosts}
            search={search}
        />
    )
}

export async function getStaticPaths({ locales }) {
    return {
        paths: await PortfolioDetailData.getPaths(locales),
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {
    const props = await PortfolioDetailData.getProperties(locale, params)
    return {
      props: {
        title: props.work.title,
        description: props.work.description,
        ...props
      }
    }
}
  
WorkDetailPage.layout = LandingLayout

export default WorkDetailPage
