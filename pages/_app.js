import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import CookieConsent, { Cookies } from 'react-cookie-consent'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
      <CookieConsent
        location="bottom"
        buttonText="OK"
        boolean={true}
        style={{ backgroundColor: '#737373' }}
        buttonStyle={{ backgroundColor: 'black', borderRadius: '10%', color: 'white' }}
      >
        Sivustolla käytetään evästeitä blogin kehittämiseksi. Jatkamalla käyttöä hyväksyt evästeiden
        käytön.
      </CookieConsent>
    </ThemeProvider>
  )
}
