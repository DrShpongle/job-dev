import type {AppProps} from 'next/app'
import {useRouter} from 'next/router'
import {AnimatePresence} from 'framer-motion'

import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  )
}

export default MyApp
