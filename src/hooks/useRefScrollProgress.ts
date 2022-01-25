import * as React from 'react'

export const useRefScrollProgress = (inputRef: any, offset: number = 0) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(null)
  const [end, setEnd] = React.useState(null)
  React.useLayoutEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = rect.top + scrollTop
    setStart(offsetTop / document.body.clientHeight)
    setEnd((offsetTop + rect.height) / document.body.clientHeight)
  })
  return {ref, start, end}
}
