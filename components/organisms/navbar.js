import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Scrollspy from 'react-scrollspy'

const Navbar = ({ isLanding, infoLandingPage }) => {

    const { locale, locales, push, asPath } = useRouter()
    const t = useTranslations('site')
    const { contactPhone, contactEmail } = infoLandingPage
    const [isSticky, setIsSticky] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

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
        <div className={classnames('navbar py-3', {'fixed w-full bg-white z-20 border-b': isSticky})}>
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
                        <nav>
                            <Scrollspy className="flex space-x-4" items={ ['home', 'services', 'solutions', 'blog'] } currentClassName="text-primary">
                                <a href="#home" className="hover:text-primary hover:underline">{t('navbar-home')}</a> 
                                <a href="#services" className="hover:text-primary hover:underline">{t('navbar-services')}</a>
                                <a href="#solutions" className="hover:text-primary hover:underline">{t('navbar-portfolio')}</a>
                                <a href="#blog" className="hover:text-primary hover:underline">{t('navbar-blog')}</a>
                                {locales.filter(item => item != locale).map(item => <a key={item} onClick={() => push(asPath, asPath, { locale: item })} className="hover:text-primary hover:underline cursor-pointer flex items-center"><Image src={`/images/${item}.png`} alt={`Language ${item}`} width={15} height={15} /></a>)}
                            </Scrollspy>
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
                            {locales.filter(item => item != locale).map(item => <a key={item} onClick={() => push(asPath, asPath, { locale: item })} className="hover:text-primary hover:underline cursor-pointer flex items-center"><Image src={`/images/${item}.png`} alt={`Language ${item}`} width={15} height={15} /></a>)}
                        </nav>
                    }
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    <div className="bar1 rounded-full bg-gray-300"></div>
                    <div className="bar2 rounded-full bg-gray-300"></div>
                    <div className="bar3 rounded-full bg-gray-300"></div>
                </div>
            </div>
            {isOpen && <div className="px-10 md:px-10 lg:px-40 mt-4 md:hidden">
                {isLanding ? 
                    <nav>
                        <Scrollspy className="flex flex-col" items={ ['home', 'services', 'solutions', 'blog'] } currentClassName="text-primary">
                            <a href="#home" className="my-1 hover:text-primary hover:underline">{t('navbar-home')}</a> 
                            <a href="#services" className="my-1 hover:text-primary hover:underline">{t('navbar-services')}</a> 
                            <a href="#solutions" className="my-1 hover:text-primary hover:underline">{t('navbar-portfolio')}</a>
                            <a href="#blog" className="my-1 hover:text-primary hover:underline">{t('navbar-blog')}</a>
                            {locales.filter(item => item != locale).map(item => <a key={item} onClick={() => push(asPath, asPath, { locale: item })} className="my-1 hover:text-primary hover:underline cursor-pointer flex items-center"><Image src={`/images/${item}.png`} width={15} height={15} /></a>)}
                        </Scrollspy>
                    </nav> : 
                    <nav className="flex flex-col">
                        <Link href="/">
                            <a className="my-1 hover:text-primary hover:underline">{t('navbar-home')}</a> 
                        </Link>
                        <Link href="/#services">
                            <a className="my-1 hover:text-primary hover:underline">{t('navbar-services')}</a>
                        </Link>
                        <Link href="/#solutions">
                            <a className="my-1 hover:text-primary hover:underline">{t('navbar-portfolio')}</a>
                        </Link>
                        <Link href="/#blog">
                            <a className="my-1 hover:text-primary hover:underline">{t('navbar-blog')}</a>
                        </Link>
                        {locales.filter(item => item != locale).map(item => <a key={item} onClick={() => push(asPath, asPath, { locale: item })} className="my-1 hover:text-primary hover:underline cursor-pointer flex items-center"><Image src={`/images/${item}.png`} width={15} height={15} /></a>)}
                    </nav>
                }
            </div>}
        </div> 
    )
}

Navbar.propTypes = {
    isLanding: PropTypes.any.isRequired,
    infoLandingPage: PropTypes.any.isRequired,
}

export default Navbar