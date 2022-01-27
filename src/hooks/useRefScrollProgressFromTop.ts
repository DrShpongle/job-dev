import * as React from 'react'

export const useRefScrollProgressFromTop = (inputRef: any) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  React.useEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    const offsetTop = rect.top
    setStart(
      (offsetTop - window.innerHeight) /
        (document.body.clientHeight - window.innerHeight),
    )
    setEnd(offsetTop / (document.body.clientHeight - window.innerHeight))
  }, [])
  return {start, end}
}
