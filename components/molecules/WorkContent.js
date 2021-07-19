import PropTypes from 'prop-types'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import DateRibbon from '../atoms/DateRibbon'
import DateLine from '../atoms/DateLine'

const WorkContent = ({ work }) => {

    const t = useTranslations('site')
    const publishDate = work.publishDate ? new Date(work.publishDate) : new Date()

    return (
        <div className="px-5 relative w-full md:w-2/3">
            <h1 className="text-4xl mb-6">{work.title}</h1>
            {work.link && <a target="_blank" rel="noreferrer" href={work.link} className="mb-6 block cursor-pointer text-primary hover:underline mt-2">{t('go-to')} {work.title}</a>}
            <DateRibbon date={publishDate} />
            <div className="mb-2 md:hidden"><DateLine date={publishDate} /></div>
            <div className="mb-5 rounded border">
                <Image src={work.cover.url} width={800} height={800} alt={work.cover.title} />
            </div>
            <div className="text-justify mb-8">{work.content ? documentToReactComponents(work.content.json) : work.description}</div>
            {work.imagesCollection && <div className="flex flex-wrap md:space-x-2">
                {work.imagesCollection.items.map(item => (
                    <div class="border rounded w-full md:w-1/3">
                        <Image  src={item.title} src={item.url} height={200} width={200} />
                    </div>)
                )}
            </div>}
        </div>
    )
}

WorkContent.propTypes = {
    work: PropTypes.object.isRequired,
}

export default WorkContent