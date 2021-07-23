import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'
import SectionHeader from '../molecules/SectionHeader'
import TeamCard from '../molecules/TeamCard'

const TeamLanding = ({ title, description, members}) => {

    const t = useTranslations('site')

    return (
        <div id="team" className="pt-20 pb-10 px-5 lg:px-40 flex-col">
            <SectionHeader 
                title={title}
                description={description}
                // button={{
                //     text: t('link-member'),
                //     link: '/team'
                // }} 
            />
            <div>
                {members.map((item, index) => <TeamCard key={item.slug} index={index} {...item} />)}
            </div>
        </div>
    )
}

TeamLanding.propTypes = {
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    members: PropTypes.array.isRequired,
}
  
export default TeamLanding
