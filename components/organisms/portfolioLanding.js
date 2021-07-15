import PropTypes from 'prop-types'
import { useTranslation } from 'next-i18next'
import SectionHeader from '../molecules/sectionHeader'
import WorkCard from '../molecules/workCard'

const PortolioLanding = ({ title, description, works}) => {

    const { t } = useTranslation('common')

    return (
        <div id="solutions" className="pt-20 pb-10 px-5 lg:px-40 flex-col">
            <SectionHeader 
                title={title}
                description={description} 
                button={{
                    text: t('link-portfolio'),
                    link: '',
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