import * as React from 'react'

export const useRefScrollProgress = (inputRef: any) => {
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
    setStart(rect.top / (document.body.clientHeight - window.innerHeight))
    setEnd(
      (rect.top + rect.height) /
        (document.body.clientHeight - window.innerHeight),
    )
  }, [])
  return {ref, start, end}
}
