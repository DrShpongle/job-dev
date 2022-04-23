import type {AppProps} from 'next/app'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {DefaultSeo, SocialProfileJsonLd} from 'next-seo'
import Head from 'next/head'

import defaultSeoConfig from '../../next-seo.config'
import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', 'G-3DDEV708JB', {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <DefaultSeo {...defaultSeoConfig} />
      <SocialProfileJsonLd
        type="Person"
        name="Jamie O'Brien"
        url="https://jamieobrien.com/"
        sameAs={[
          'https://www.facebook.com/whoisjob/',
          'https://www.instagram.com/whoisjob/',
          'https://www.youtube.com/channel/UCo_q6aOlvPH7M-j_XGWVgXg',
          'https://twitter.com/whoisjob',
        ]}
      />
      <Component {...pageProps} key={router.pathname} />
    </>
  )
}

export default MyApp
