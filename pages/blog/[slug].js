import PropTypes from 'prop-types'
import LandingLayout from '../../components/layouts/landing'
import ArticleTemplate from '../../components/templates/articlePost'
import ContentfulApi from '../../utils/ContentfulApi'

const ArticleDetailPage = ({ article, relatedPosts }) => {

    return (
        <ArticleTemplate article={article} relatedPosts={relatedPosts} />
    )
}

export async function getStaticPaths({ locales }) {
    let slugs = await ContentfulApi.getSlugs("Article")
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
    const article = await ContentfulApi.getPostBySlug(locale, params.slug)
    const relatedPosts = await ContentfulApi.getPostsRelated('Article', article.contentfulMetadata.tags.map(item => item.id), article.slug)

    return {
      props: {
        messages: require(`../../locales/${locale}.json`),
        title: article.title,
        description: article.description,
        isLanding: false,
        infoLandingPage,
        article,
        relatedPosts
      }
    }
}
  
ArticleDetailPage.layout = LandingLayout

export default ArticleDetailPage
