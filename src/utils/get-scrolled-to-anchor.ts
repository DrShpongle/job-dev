export const getScrolledToAnchor = () => {
  const path = window.location.hash
  if (path && path.includes('#')) {
    const id = path.replace('#', '')
    const el = window.document.getElementById(id)
    const r = el?.getBoundingClientRect()
    window.scrollTo({
      top: r?.top || 0,
      // behavior: 'smooth',
    })
  }
}
