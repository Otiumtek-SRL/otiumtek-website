import PropTypes from 'prop-types'
import classnames from 'classnames'
import LinkButton from '../atoms/LinkButton'

const SectionHeader = ({ title, description, button, mode }) => {

    return (
        <div className="text-center mb-10">
            <h2 className={classnames('text-2xl mb-5 font-bold', {'text-white' : mode == 'dark'})}>{title}</h2>
            <div className={classnames('w-full md:w-9/12 m-auto mb-5', {'text-white' : mode == 'dark'})}>{description}</div>
            { button && <LinkButton text={button.text} link={button.link} /> }
        </div>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

SectionHeader.defaultProps = {
    mode: 'light'
}

export default SectionHeader