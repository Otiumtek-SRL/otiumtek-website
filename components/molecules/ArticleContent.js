import PropTypes from 'prop-types'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import DateRibbon from '../atoms/DateRibbon'
import DateLine from '../atoms/DateLine'
import Tags from '../atoms/Tags'

const ArticleContent = ({ article }) => {

    const publishDate = article.publishDate ? new Date(article.publishDate) : new Date()

    return (
        <div className="px-5 relative w-full md:w-2/3">
            <h1 className="text-4xl mb-6">{article.title}</h1>
            <DateRibbon date={publishDate} />
            <div className="mb-2 md:hidden"><DateLine date={publishDate} /></div>
            <Tags tags={article.contentfulMetadata.tags} />
            <div className="mb-5 rounded border mt-4">
                {article.cover && <Image src={article.cover.url} width={800} height={800} alt={article.cover.title} />}
            </div>
            <div className="text-justify">{!article.content ? article.description : documentToReactComponents(article.content.json)}</div>
        </div>
    )
}

ArticleContent.propTypes = {
    article: PropTypes.object.isRequired,
}

export default ArticleContent