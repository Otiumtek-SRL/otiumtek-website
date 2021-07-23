import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'

const TeamCard = ({title, description, cover, slug, index}) => {

    const [name, position] = title.split(';')
    const { locale } = useRouter()
    const t = useTranslations('site')

    return (
        <div className={classNames('flex flex-wrap mb-10', {'md:flex-row-reverse' : index % 2 != 0})}>
            <div className="w-full md:w-1/2 mb-5 border rounded relative next-image" style={{height: '30rem'}}>
                {cover && <Image className="w-full" src={cover.url} height={300} width={300} alt={cover.title} />}
            </div>
            <div className="w-full md:w-1/2 flex justify-center flex-col items-start px-10">
                <h3 className="text-lg font-bold uppercase mb-1">{name}</h3>
                <h4 className="text-sm font-bold uppercase mb-1">{position}</h4>
                <div>{description}</div> 
                <Link href={`/team/${slug}`} locale={locale}>
                    <a className="mb-2 text-primary hover:underline mt-2">{t('view-profile')}</a>
                </Link>
            </div>
        </div>
    )
}

TeamCard.propTypes = {
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
    cover: PropTypes.any.isRequired,
    index: PropTypes.any.isRequired,
    slug: PropTypes.any.isRequired,
}

export default TeamCard
