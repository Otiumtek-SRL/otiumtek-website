import PropTypes from 'prop-types'
import LandingLayout from '../../components/layouts/landing'
import ArticleTemplate from '../../components/templates/articlePost'
import BlogDetailData from '../../domain/BlogDetailData'

const ArticleDetailPage = ({ article, relatedPosts, search }) => {

    return (
        <ArticleTemplate 
            article={article} 
            relatedPosts={relatedPosts} 
            search={search}
        />
    )
}

export async function getStaticPaths({ locales }) {
    return {
        paths: await BlogDetailData.getPaths(locales),
        fallback: false
    }
}

export async function getStaticProps({ locale, params }) {
    const props = await BlogDetailData.getProperties(locale, params)
    return {
      props: {
        title: props.article.title,
        description: props.article.description,
        ...props
      }
    }
}
  
ArticleDetailPage.layout = LandingLayout

export default ArticleDetailPage
