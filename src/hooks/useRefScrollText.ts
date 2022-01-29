import * as React from 'react'

export const useRefScrollText = (inputRef: any) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  React.useEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    setStart(
      (rect.top - window.innerHeight * 0.65) /
        (document.body.clientHeight - window.innerHeight),
    )
    setEnd(
      (rect.top + rect.height - window.innerHeight * 0.35) /
        (document.body.clientHeight - window.innerHeight),
    )
  }, [])
  return {start, end}
}
