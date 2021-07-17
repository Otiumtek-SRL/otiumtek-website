import PropTypes from 'prop-types'
import LandingLayout from '../../components/layouts/landing'
import WorkTemplate from '../../components/templates/workPost'
import ContentfulApi from '../../utils/ContentfulApi'

const WorkDetailPage = ({ work, relatedPosts }) => {

    return (
        <WorkTemplate work={work} relatedPosts={relatedPosts} />
    )
}

export async function getStaticPaths({ locales }) {
    let slugs = await ContentfulApi.getSlugs("Work")
    let paths = []
    for (let locale of locales) {
        for(let slug of slugs) {
            paths = paths.concat([{params: { slug }, locale }])
        }
    }
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
        messages: require(`../../locales/${locale}.json`),
        title: work.title,
        description: work.description,
        isLanding: false,
        infoLandingPage,
        work,
        relatedPosts
      }
    }
}
  
WorkDetailPage.layout = LandingLayout

export default WorkDetailPage
