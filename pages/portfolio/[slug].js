import PropTypes from 'prop-types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LandingLayout from '../../components/layouts/landing'
import WorkTemplate from '../../components/templates/workPost'
import ContentfulApi from '../../utils/ContentfulApi'

const WorkDetailPage = ({ work, relatedPosts }) => {

    return (
        <WorkTemplate work={work} relatedPosts={relatedPosts} />
    )
}

export async function getStaticPaths({ locale }) {
    let paths = await ContentfulApi.getSlugs("Work")
    paths = paths.map(item => ({params: { slug: item } }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {

    const infoLandingPage = await ContentfulApi.getInfoPage(locale)
    const work = await ContentfulApi.getPostBySlug(locale, params.slug)
    const relatedPosts = await ContentfulApi.getPostsRelated('Work', work.contentfulMetadata.tags.map(item => item.id), work.slug)

    return {
      props: {
        ...await serverSideTranslations(locale, ['common']),
        isLanding: false,
        infoLandingPage,
        work,
        relatedPosts
      }
    }
}
  
WorkDetailPage.layout = LandingLayout

export default WorkDetailPage
