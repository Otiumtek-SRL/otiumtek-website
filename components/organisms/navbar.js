import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'
import { useTranslation } from 'next-i18next'

const Navbar = ({ isLanding, infoLandingPage }) => {

    const { t } = useTranslation('common')
    const { contactPhone, contactEmail } = infoLandingPage
    const [isSticky, setIsSticky] = useState(true)

    useEffect(() => {
        setIsSticky(window.scrollY == 0 ? false : true)
        window.addEventListener("scroll", (e) => {
            const scrollPosition = window.scrollY
            if(scrollPosition >= 100){
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        });
        return () => {}
    }, [])

    return (
        <div className={classnames('navbar py-3', {'fixed w-full bg-white z-10 border-b': isSticky})}>
            <div className="px-10 md:px-10 lg:px-20 flex items-center justify-between">
                <Link href="/">
                    <a>
                        <Image src="/images/logotipo.svg" width={150} height={40} alt="Otiumtek" className="h-10"/>
                    </a>
                </Link>
                <div className="hidden md:block">
                    <div className="text-sm text-right mb-2">
                        <a target="_blank" rel="noreferrer" href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a> |
                        {' '}<a href={`tel:${contactPhone}`} className="text-primary hover:underline">{contactPhone}</a>
                    </div>
                    {isLanding ? 
                        <nav className="flex space-x-4">
                            <a href="#app" className="hover:text-primary hover:underline text-primary">{t('navbar-home')}</a> 
                            <a href="#services" className="hover:text-primary hover:underline">{t('navbar-services')}</a>
                            <a href="#solutions" className="hover:text-primary hover:underline">{t('navbar-portfolio')}</a>
                            <a href="#blog" className="hover:text-primary hover:underline">{t('navbar-blog')}</a> 
                        </nav> : 
                        <nav className="flex space-x-4">
                            <Link href="/">    
                                <a className="hover:text-primary hover:underline text-primary">{t('navbar-home')}</a> 
                            </Link>
                            <Link href="/#services">
                                <a className="hover:text-primary hover:underline">{t('navbar-services')}</a>
                            </Link>
                            <Link href="/#solutions">
                                <a href="#solutions" className="hover:text-primary hover:underline">{t('navbar-portfolio')}</a>
                            </Link>
                            <Link href="/#blog">
                            <a href="#blog" className="hover:text-primary hover:underline">{t('navbar-blog')}</a>
                            </Link>
                            <a href="#estimate-project" className="hover:text-primary hover:underline">{t('estimate-project')}</a> 
                        </nav>
                    }
                </div>
                <div className="md:hidden">
                    <div className="bar1 rounded-full bg-gray-300"></div>
                    <div className="bar2 rounded-full bg-gray-300"></div>
                    <div className="bar3 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    isLanding: PropTypes.any.isRequired,
    infoLandingPage: PropTypes.any.isRequired,
}

export default Navbar