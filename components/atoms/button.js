import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Button = ({text, isLink, link}) => {

    const { locale } = useRouter()

    return isLink ? (<Link href={link} locale={locale} >
        <a className="my-10 h-10 rounded font-bold 
            px-8 bg-primary inline-block text-white 
            leading-10 cursor-pointer hover:bg-secondary 
            transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
        {text}
    </a></Link>) : (<button>{text}</button>)
}

Button.propTypes = {
    text: PropTypes.any.isRequired,
    isLink: PropTypes.any.isRequired,
    link: PropTypes.any.isRequired,
}

export default Button