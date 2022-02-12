import * as React from 'react'
import {useWindowSize} from 'react-use'

import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'

export const useRefScrollProgress = (inputRef: any, gap: number = 1.5) => {
  const {width} = useWindowSize()
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const rect = ref.current.getBoundingClientRect()
    const gapValue = window.innerHeight * gap
    setStart(
      (rect.top + scrollTop) /
        (document.body.clientHeight - window.innerHeight),
    )
    setEnd(
      (rect.bottom + scrollTop - gapValue) /
        (document.body.clientHeight - window.innerHeight),
    )
  }, [width])
  return {ref, start, end}
}
