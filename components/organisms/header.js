import PropTypes from 'prop-types'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Button from '../atoms/button'

const Header = ({ slogan, subslogan }) => {
    
    const t = useTranslations('site')

    return (
        <div id="home" className="flex items-center pt-10 pb-5 sm:pb-5 flex-col">
            <Image src="/images/header.png" alt="Otiumtek" width={750} height={250} className="h-80 opacity-50"/>
            <div className="mt-2 text-center">
                <h1 className="text-3xl font-bold text-shadow">{slogan}</h1>
                <p className="text-xl mt-4 mb-5">{subslogan}</p> 
                <Button text={t('estimate-project')} isLink link="#estimate-project" />
            </div>
            <div className="mt-8 flex space-y-2 w-full pb-5 justify-center flex-wrap">
                <div className="w-3/12 md:w-1/12 flex justify-center">
                    <i className="text-6xl devicon-react-original text-gray-200 hover:text-primary transition duration-300"></i>
                </div>
                <div className="w-3/12 md:w-1/12 flex justify-center">
                    <i className="text-6xl devicon-vuejs-plain text-gray-200 hover:text-primary transition duration-300"></i></div>
                <div className="w-3/12 md:w-1/12 flex justify-center">
                    <i className="text-6xl devicon-laravel-plain text-gray-200 hover:text-primary transition duration-300"></i>
                </div>
                <div className="w-3/12 md:w-1/12 flex justify-center">
                    <i className="text-6xl devicon-nodejs-plain text-gray-200 hover:text-primary transition duration-300"></i>
                </div>
                <div className="w-3/12 md:w-1/12 flex justify-center">
                    <i className="text-6xl devicon-flutter-plain text-gray-200 hover:text-primary transition duration-300"></i>
                </div>
                <div className="w-3/12 md:w-1/12 flex justify-center">
                    <i className="text-6xl devicon-cplusplus-plain text-gray-200 hover:text-primary transition duration-300"></i>
                </div>
                <div className="w-3/12 md:w-1/12 flex justify-center">
                    <i className="text-6xl devicon-java-plain text-gray-200 hover:text-primary transition duration-300"></i>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    slogan: PropTypes.any.isRequired,
    subslogan: PropTypes.any.isRequired,
}

export default Header