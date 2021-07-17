import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'

const Breadcrumb = ({ page, postTitle }) => {

    const { locale } = useRouter()
    const t = useTranslations('site')

    const pages = {
        portfolio: { text: t('navbar-portfolio'), link: "/portfolio/page/1" },
        blog: { text: t('navbar-blog'), link: "/blog/page/1" }
    }

    return (
        <div className="mb-10 md:mb-20 flex justify-center">
            <ol className="flex space-x-2 items-center">
                <li className="text-sm hover:text-primary hover:underline">
                    <Link href="/" locale={locale} ><a>{t('navbar-home')}</a></Link>
                </li>
                {page && !postTitle && 
                    <>
                        <span>&gt;&gt;</span>
                        <li className="text-sm">{pages[page].text}</li>
                    </>
                }
                {postTitle &&
                    <>
                        <span>&gt;&gt;</span>
                        <li className="text-sm hover:text-primary hover:underline">
                            <Link href={pages[page].link} locale={locale}><a>{pages[page].text}</a></Link>
                        </li>
                        <span>&gt;&gt;</span>
                        <li className="font-bold text-primary">{postTitle}</li>
                    </>
                }
            </ol>
        </div>
    )
}

Breadcrumb.propTypes = {
    //postTitle: PropTypes.any.isRequired,
    page: PropTypes.any.isRequired,
}

export default Breadcrumb