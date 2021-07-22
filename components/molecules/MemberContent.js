import PropTypes from 'prop-types'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const MemberContent = ({ member }) => {

    const t = useTranslations('site')

    return (
        <div className="px-5 relative w-full md:w-2/3">
            <h1 className="text-4xl mb-6">{member.title}</h1>
            <div className="mb-5 rounded border relative next-image" style={{height: '50rem'}}>
                <Image src={member.cover.url} height={1000} width={1000} alt={member.cover.title} />
            </div>
            <div className="text-justify content mb-8">{member.content ? documentToReactComponents(member.content.json) : member.description}</div>
        </div>
    )
}

MemberContent.propTypes = {
    member: PropTypes.object.isRequired,
}

export default MemberContent