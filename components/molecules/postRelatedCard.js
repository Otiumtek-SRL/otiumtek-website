import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import DateLine from '../atoms/dateLine'

const PostRelatedCard = ({ post }) => {

    const t = useTranslations('site')
    const publishDate = post.publishDate ? new Date(post.publishDate) : new Date()
    const link = `/${post.type == 'Article' ? 'blog' : 'portfolio'}/${post.slug}`

    return (
        <div className="mt-3">
            <Link href={link}>
                <a className="shadow mb-4 rounded bg-white block flex items-center p-2">
                    <Image src={post.cover.url} width={100} height={100} alt={post.cover.title} />
                    <div className="p-1 ml-2">
                        <h2 className="font-bold">{post.title}</h2>
                        <div className="text-sm mt-1">
                            <DateLine date={publishDate} />
                            <div className="mt-1 ml-2 px-2 bg-primary inline-block text-white rounded">{t(`post-${post.type}`)}</div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

PostRelatedCard.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostRelatedCard