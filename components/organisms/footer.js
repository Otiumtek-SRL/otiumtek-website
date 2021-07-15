import PropTypes from 'prop-types'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const Footer = ({ infoLandingPage }) => {

    const { t } = useTranslation('common')
    const { socialNetworkLinkedin, socialNetworkGithub } = infoLandingPage

    return (
        <div id="footer" className="flex flex-wrap space-y-2 py-5 px-10">
            <div className="w-full flex justify-center md:justify-start md:w-1/3">
                <Image src="/images/logotipo.svg" width={100} height={20} alt="Otiumtek" className="h-10"/>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center text-center">
                <span>© Otiumtek { (new Date()).getFullYear() } {' '} {t('copyright')}</span>
            </div>
            <div className="w-full md:w-1/3 flex items-center jutify-center md:justify-end">
                <div className="flex w-full space-x-4 justify-center">
                    <a target="_blank" href={socialNetworkLinkedin} className="text-primary hover:underline">Linkedin</a> 
                    <a target="_blank" href={socialNetworkGithub} className="text-primary hover:underline">Github</a>
                </div>
            </div>
        </div>
    )
}

Footer.propTypes = {
    infoLandingPage: PropTypes.any.isRequired
}
  
export default Footer