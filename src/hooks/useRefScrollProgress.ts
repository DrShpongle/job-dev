import * as React from 'react'

export const useRefScrollProgress = (inputRef: any, offset: number = 0) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  React.useEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const offsetTop = rect.top + scrollTop
    setStart((offsetTop + offset) / document.body.clientHeight)
    setEnd((offsetTop + rect.height + offset) / document.body.clientHeight)
  }, [])
  return {ref, start, end}
}
