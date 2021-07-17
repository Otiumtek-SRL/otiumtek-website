import PropTypes from 'prop-types'
import Link from 'next/link'
import Tags from '../atoms/tags'

const ArticleCard = ({ title, description, slug, contentfulMetadata: { tags } }) => {
    return (
        <div className="w-full md:w-1/2 p-5">
            <div className="p-2">
                <Link href={`/blog/${slug}`}>
                    <a className="shadow rounded bg-white block">
                        <div className="flex justify-between">
                            <span className="text-xs bg-primary shadow-lg p-2 text-white border-4 border-primary rounded">May 06 2021</span> 
                            <Tags tags={tags} />
                        </div>
                        <div className="px-5 py-4">
                            <h3 className="text-lg font-bold">{title}</h3>
                            <div className="text-sm mt-2">
                               {description}
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

ArticleCard.propTypes = {
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    slug: PropTypes.any.isRequired,
}

ArticleCard.defaultProps = {
    contentfulMetadata: {},
}

export default ArticleCard