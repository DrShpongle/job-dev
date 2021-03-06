import * as React from 'react'
import {useWindowSize} from 'react-use'

import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'

export const useRefScrollProgressFromTop = (inputRef: any) => {
  const {width} = useWindowSize()
  const ref = inputRef
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const rect = ref.current.getBoundingClientRect()
    const offsetTop = rect.top
    setStart(
      (offsetTop + scrollTop - window.innerHeight) /
        (document.body.clientHeight - window.innerHeight),
    )
    setEnd(
      (offsetTop + scrollTop) /
        (document.body.clientHeight - window.innerHeight),
    )
  }, [width])
  return {start, end}
}
