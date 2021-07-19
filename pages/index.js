import LandingLayout from '../components/layouts/Landing'
import LandingTemplate from '../components/templates/Landing'
import LandingData from '../domain/LandingData'

const HomePage = (props) => {
  return (
    <LandingTemplate {...props} />
  )
}

export async function getStaticProps({ locale }) {
  const props = await LandingData.getProperties(locale)
  return {
    props: {
      title: "Otiumtek",
      description: props.infoLandingPage.slogan,
      ...props
    }
  }
}

HomePage.layout = LandingLayout

export default HomePage
