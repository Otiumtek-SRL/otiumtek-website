import { appWithTranslation } from 'next-i18next'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || ((children) => <>{children}</>)
  return Component.layout ? (
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>) : (
        <Component {...pageProps} />
      )
}

export default appWithTranslation(MyApp)
