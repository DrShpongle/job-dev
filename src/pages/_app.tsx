import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-3DDEV708JB', {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} key={router.pathname} />
}

export default MyApp
