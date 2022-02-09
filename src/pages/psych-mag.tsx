import * as React from 'react'
import type {NextPage} from 'next'

import PageLayout from 'components/layouts/page-layout'
import Hero from 'components/sections/psych-mag/hero'

const SurfMag: NextPage = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <PageLayout>
      <Hero />
    </PageLayout>
  ) : null
}

export default SurfMag
