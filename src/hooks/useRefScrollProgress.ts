import * as React from 'react'

export const useRefScrollProgress = (inputRef: any) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  React.useLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const computedStart =
      (rect.top + scrollTop - window.innerHeight) / document.body.clientHeight
    const computedEnd =
      (rect.bottom + scrollTop - window.innerHeight) /
      document.body.clientHeight
    setStart(computedStart)
    setEnd(computedEnd)
  })
  return {ref, start, end}
}
