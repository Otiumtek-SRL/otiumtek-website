import PropTypes from 'prop-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import classnames from 'classnames'
import Button from '../atoms/button'

const SectionHeader = ({ title, description, button, mode }) => {

    return (
        <div className="text-center">
            <h2 className={classnames('text-2xl mb-5 font-bold', {'text-white' : mode == 'dark'})}>{title}</h2>
            <div className={classnames('w-full md:w-9/12 m-auto', {'text-white' : mode == 'dark'})}>{documentToReactComponents(description.json)}</div>
            { button && <Button text={button.text} link={button.link} isLink={button.isLink} /> }
        </div>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired,
}

SectionHeader.defaultProps = {
    mode: 'light'
}

export default SectionHeader