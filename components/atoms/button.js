import PropTypes from 'prop-types'

const Button = ({text, isLink, link}) => {
    return isLink ? (<a href={link} className="my-10 h-10 rounded font-bold px-8 bg-primary inline-block text-white leading-10 cursor-pointer hover:bg-secondary transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        {text}
    </a>) : (<button>{text}</button>)
}

Button.propTypes = {
    text: PropTypes.any.isRequired,
    isLink: PropTypes.any.isRequired,
    link: PropTypes.any.isRequired,
}

export default Button