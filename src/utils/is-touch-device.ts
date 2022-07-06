import {isBrowser} from './is-browser'
export const isTouchDevice = () => {
  if (!isBrowser) return
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  )
}
