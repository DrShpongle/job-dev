import * as React from 'react'

export const useRefScrollProgress = (
  inputRef: any,
  multiplicator: number = 1,
) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  React.useEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setStart(rect.top / (document.body.clientHeight - window.innerHeight))
    setEnd(
      (rect.bottom * multiplicator) /
        (document.body.clientHeight - window.innerHeight),
    )
  }, [])
  return {ref, start, end}
}
