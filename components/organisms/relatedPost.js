import PropTypes from 'prop-types'
import PostRelatedCard from '../molecules/postRelatedCard'
import { useTranslation } from 'next-i18next'

const RelatedPost = ({ posts }) => {

    const { t } = useTranslation('common')

    if(!posts.length)
        return null

    return (
        <div className="mt-8">
            <h2 className="text-lg font-bold">{t('related')}</h2>
            {posts.map((item, index) => <PostRelatedCard key={index} post={item} />)}
        </div>
    )
}

RelatedPost.propTypes = {
    posts: PropTypes.array,
}

RelatedPost.defaultProps = {
    posts: [],
}

export default RelatedPost