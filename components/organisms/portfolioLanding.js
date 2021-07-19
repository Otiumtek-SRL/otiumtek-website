import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'
import SectionHeader from '../molecules/SectionHeader'
import WorkCard from '../molecules/WorkCard'

const PortolioLanding = ({ title, description, works}) => {

    const t = useTranslations('site')

    return (
        <div id="solutions" className="pt-20 pb-10 px-5 lg:px-40 flex-col">
            <SectionHeader 
                title={title}
                description={description} 
                button={{
                    text: t('link-portfolio'),
                    link: '/portfolio/page/1',
                    isLink: true
                }} 
            />
            <div>
                {works.map((item, index) => <WorkCard key={item.slug} index={index} {...item} />)}
            </div>
        </div>
    )
}

PortolioLanding.propTypes = {
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    works: PropTypes.array.isRequired,
}
  
export default PortolioLanding