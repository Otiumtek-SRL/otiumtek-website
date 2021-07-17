import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'
import SectionHeader from '../molecules/sectionHeader'
import ArticleCard from '../molecules/articleCard'

const BlogLanding = ({ title, description, articles}) => {

    const t = useTranslations('site')

    return (
        <div id="blog" className="py-20 px-5 lg:px-40 flex-col bg-secondary">
            <SectionHeader 
                title={title}
                description={description}
                mode="dark"
                button={{
                    text: t('link-blog'),
                    link: '/blog/page/1',
                    isLink: true
                }}
            />
            <div className="flex flex-wrap mt-10">
                {articles.map(item => <ArticleCard key={item.slug} {...item} />)}
            </div>
        </div>
    )
}

BlogLanding.propTypes = {
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    articles: PropTypes.array.isRequired,
}
  
export default BlogLanding