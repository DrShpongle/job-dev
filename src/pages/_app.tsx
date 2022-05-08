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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="facebook-domain-verification"
          content="hklkoy16kctd1or20nqdzgib0fvk8m"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#11c2ff"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
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
