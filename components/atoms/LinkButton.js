import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import classnames from 'classnames'

const LinkButton = ({text, link, disabled}) => {

    const { locale, push } = useRouter()

    const onHandlerClick = () => {
        if(!disabled) {
            push(link, link, {locale})
        }
    }

    return (
        <a onClick={onHandlerClick}
        className={classnames(`h-10 rounded font-bold px-8 inline-block leading-10`, 
        {
            'bg-primary text-white cursor-pointer hover:bg-secondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110': !disabled,
            'bg-gray-200 text-black': disabled,
            
        })}
        >
            {text}
        </a>
    )
}

LinkButton.propTypes = {
    text: PropTypes.any.isRequired,
    link: PropTypes.any.isRequired,
}

export default LinkButton