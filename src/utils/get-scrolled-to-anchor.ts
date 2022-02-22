export const getScrolledToAnchor = (id: string) => {
  const path = window.location.hash
  if (path && path.includes(`#${id}`)) {
    const el = window.document.getElementById(id)
    const r = el?.getBoundingClientRect()
    window.scrollTo({
      top: r?.top || 0,
      // behavior: 'smooth',
    })
  }
}
