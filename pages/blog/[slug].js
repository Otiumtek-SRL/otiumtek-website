import PropTypes from 'prop-types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LandingLayout from '../../components/layouts/landing'
import ArticleTemplate from '../../components/templates/articlePost'
import ContentfulApi from '../../utils/ContentfulApi'

const ArticleDetailPage = ({ article, relatedPosts }) => {

    return (
        <ArticleTemplate article={article} relatedPosts={relatedPosts} />
    )
}

export async function getStaticPaths({ locale }) {
    let paths = await ContentfulApi.getSlugs("Article")
    paths = paths.map(item => ({params: { slug: item } }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {

    const infoLandingPage = await ContentfulApi.getInfoPage(locale)
    const article = await ContentfulApi.getPostBySlug(locale, params.slug)
    const relatedPosts = await ContentfulApi.getPostsRelated('Article', article.contentfulMetadata.tags.map(item => item.id), article.slug)

    return {
      props: {
        ...await serverSideTranslations(locale, ['common']),
        isLanding: false,
        infoLandingPage,
        article,
        relatedPosts
      }
    }
}
  
ArticleDetailPage.layout = LandingLayout

export default ArticleDetailPage
