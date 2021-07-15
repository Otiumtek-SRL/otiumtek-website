import PropTypes from 'prop-types'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const Breadcrumb = ({ page, postTitle }) => {

    const { t } = useTranslation('common')

    const pages = {
        portfolio: { text: t('navbar-portfolio'), link: "/portfolio/page/1" },
        blog: { text: t('navbar-blog'), link: "/blog/page/1" }
    }

    return (
        <div className="mb-10 md:mb-20 flex justify-center">
            <ol className="flex space-x-2 items-center">
                <li className="text-sm hover:text-primary hover:underline">
                    <Link href="/"><a>{t('navbar-home')}</a></Link>
                </li>
                {page && 
                    <>
                        <span>&gt;&gt;</span>
                        <li className="text-sm hover:text-primary hover:underline">
                            <Link href={pages[page].link}><a>{pages[page].text}</a></Link>
                        </li>
                    </>
                }
                {postTitle &&
                    <>
                        <span>&gt;&gt;</span>
                        <li className="font-bold text-primary">{postTitle}</li>
                    </>
                }
            </ol>
        </div>
    )
}

Breadcrumb.propTypes = {
    postTitle: PropTypes.any.isRequired,
    page: PropTypes.any.isRequired,
}

export default Breadcrumb