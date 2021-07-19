import {NextIntlProvider} from 'next-intl'
import WhatsAppWidget from 'react-whatsapp-widget'
import Head from '../components/atoms/Head'
import '../styles/globals.css'
import 'react-whatsapp-widget/dist/index.css'

function MyApp({ Component, pageProps }) {
  
  const Layout = Component.layout || ((children) => <>{children}</>)

  return <NextIntlProvider messages={pageProps.messages}>
      <Head title={pageProps.title} description={pageProps.description} />
      {Component.layout ? (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>) : (
        <Component {...pageProps} />
      )}
      <div className="fixed bottom-0 right-0">
        <WhatsAppWidget
          companyName="Otiumtek" 
          phoneNumber={pageProps.infoLandingPage.contactPhone}
        />
      </div>
    </NextIntlProvider>
}

export default MyApp
