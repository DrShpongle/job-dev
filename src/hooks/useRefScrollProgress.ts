import * as React from 'react'

import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'

export const useRefScrollProgress = (
  inputRef: any,
  multiplicator: number = 1,
) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    setStart(rect.top / (document.body.clientHeight - window.innerHeight))
    setEnd(
      (rect.bottom + window.innerHeight * (multiplicator - 1)) /
        (document.body.clientHeight - window.innerHeight),
    )
  }, [])
  return {ref, start, end}
}
