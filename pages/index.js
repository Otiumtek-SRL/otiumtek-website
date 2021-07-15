import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LandingLayout from '../components/layouts/landing'
import LandingTemplate from '../components/templates/landing'
import ContentfulApi from '../utils/ContentfulApi'

const HomePage = (props) => {
  return (
    <LandingTemplate {...props} />
  )
}

export async function getStaticProps({ locale }) {
  
  const infoLandingPage = await ContentfulApi.getInfoPage(locale)
  const services = await ContentfulApi.getServicesLanding(locale)
  const works = await ContentfulApi.getWorkLanding(locale)
  const articles = await ContentfulApi.getArticlesLanding(locale)
  
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      isLanding: true,
      infoLandingPage,
      services,
      works,
      articles
    }
  }
}

HomePage.layout = LandingLayout

export default HomePage