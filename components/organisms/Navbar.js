import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import classnames from 'classnames'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Scrollspy from 'react-scrollspy'

const Navbar = ({ isLanding, infoLandingPage }) => {
    const { locale, locales, push, asPath, pathname } = useRouter()
    const t = useTranslations('site')
    const { contactPhone, contactEmail } = infoLandingPage
    const [isSticky, setIsSticky] = useState(true)
    const [isOpen, setIsOpen] = useState(false)

    const items = [
        {name: t('navbar-home'), hrefLanding: "#home", href: "/", section: 'home', pathNames: []},
        {name: t('navbar-services'), hrefLanding: "#services", href: "/#services", section: 'services', pathNames: []},
        {name: t('navbar-portfolio'), hrefLanding: "#solutions", href: "/portfolio/page/1", section: 'solutions', pathNames: ['/portfolio/page/[page]', '/portfolio/[slug]']},
        {name: t('navbar-blog'), hrefLanding: "#blog", href:"/blog/page/1", section: 'blog', pathNames: ['/blog/page/[page]', '/blog/[slug]']},
        {name: t('navbar-team'), hrefLanding: "#team", href: "/#team", section: 'team', pathNames: ['/team/[slug]']},
    ]

    useEffect(() => {
        setIsSticky(window.scrollY == 0 ? false : true)
        window.addEventListener("scroll", (e) => {
            const scrollPosition = window.scrollY
            if(scrollPosition >= 100){
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        })
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
                            <Scrollspy className="flex space-x-4" items={items.map(item => item.section)} currentClassName="text-primary">
                                {items.map((item, index) => <a key={index} href={item.hrefLanding} className="hover:text-primary hover:underline">{item.name}</a>)}
                                {locales.filter(item => item != locale).map(item => <a key={item} onClick={() => push(asPath, asPath, { locale: item })} className="hover:text-primary hover:underline cursor-pointer flex items-center">
                                    <Image src={`/images/${item}.png`} alt={`Language ${item}`} width={15} height={15} /></a>)
                                }
                            </Scrollspy>
                        </nav> : 
                        <nav className="flex space-x-4">
                            {items.map((item, index) => <Link key={index} href={item.href}><a className={classnames('"hover:text-primary hover:underline', {'text-primary': item.pathNames.includes(pathname)})}>{item.name}</a></Link>)}
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
                            {items.map((item, index) => <a key={index} href={item.hrefLanding} className="my-1 hover:text-primary hover:underline">{item.name}</a>)}
                            {locales.filter(item => item != locale).map(item => <a key={item} onClick={() => push(asPath, asPath, { locale: item })} className="my-1 hover:text-primary hover:underline cursor-pointer flex items-center">
                                <Image src={`/images/${item}.png`} alt={`Language ${item}`} width={15} height={15} /></a>)}
                        </Scrollspy>
                    </nav> : 
                    <nav className="flex flex-col">
                        {items.map((item, index) => <Link key={index} href={item.href}><a className={classnames('"hover:text-primary hover:underline', {'text-primary': item.pathNames.includes(pathname)})}>{item.name}</a></Link>)}
                        {locales.filter(item => item != locale).map(item => <a key={item} onClick={() => push(asPath, asPath, { locale: item })} className="my-1 hover:text-primary hover:underline cursor-pointer flex items-center">
                            <Image src={`/images/${item}.png`} alt={`Language ${item}`} width={15} height={15} /></a>)}
                    </nav>
                }
            </div>}
        </div> 
    )
}

Navbar.propTypes = {
    infoLandingPage: PropTypes.any.isRequired,
}

export default Navbar
