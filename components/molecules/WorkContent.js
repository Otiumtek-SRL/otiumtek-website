import PropTypes from 'prop-types'
import Image from 'next/image'
import { SRLWrapper } from 'simple-react-lightbox'
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
            <div className="mb-5 rounded border relative next-image" style={{height: '50rem'}}>
                <Image src={work.cover.url} height={1000} width={1000} alt={work.cover.title} />
            </div>
            <div className="text-justify mb-8">{work.content ? documentToReactComponents(work.content.json) : work.description}</div>
            {work.imagesCollection && <SRLWrapper><div className="grid gap-2" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {work.imagesCollection.items.map((item, index) => (
                        <a key={index} href={item.url} className="border rounded w-full relative block">
                            <Image alt={item.title} src={item.url} height={1000} width={1000} />
                        </a>)
                    )}
                </div>
            </SRLWrapper>}
        </div>
    )
}

WorkContent.propTypes = {
    work: PropTypes.object.isRequired,
}

export default WorkContent