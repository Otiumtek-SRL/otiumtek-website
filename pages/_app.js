import {NextIntlProvider} from 'next-intl'
import WhatsAppWidget from 'react-whatsapp-widget'
import '../styles/globals.css'
import 'react-whatsapp-widget/dist/index.css'
import Head from '../components/atoms/head'

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
          textReplyTime={pageProps.messages['site']['chat-time-replies']} 
          message={pageProps.messages['site']['chat-message']}
          sendButton={pageProps.messages['site']['chat-text-button']}
          companyName="Otiumtek" 
          phoneNumber='59895159228' 
        />
      </div>
    </NextIntlProvider>
}

export default MyApp
