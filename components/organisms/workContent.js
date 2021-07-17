import PropTypes from 'prop-types'
import Image from 'next/image'
import DateRibbon from '../molecules/dateRibbon'
import DateLine from '../atoms/dateLine'

const WorkContent = ({ work }) => {

    const publishDate = work.publishDate ? new Date(work.publishDate) : new Date()

    return (
        <div className="px-5 relative w-full md:w-2/3">
            <h1 className="text-4xl mb-6">{work.title}</h1>
            <DateRibbon date={publishDate} />
            <div className="mb-2 md:hidden"><DateLine date={publishDate} /></div>
            <div className="mb-5 rounded border">
                <Image src={work.cover.url} width={800} height={800} alt={work.cover.title} />
            </div>
            <div>{!work.content ? documentToReactComponents(work.content.json) : work.description}</div>
        </div>
    )
}

WorkContent.propTypes = {
    work: PropTypes.object.isRequired,
}

export default WorkContent