export const formatDate = (apiDate: any) => {
  const monthsArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const day = new Date(apiDate).getDate()
  const month = new Date(apiDate).getMonth()
  const year = new Date(apiDate).getFullYear()
  const realMonth = monthsArr[month]
  return `${realMonth} ${day}, ${year}`
}
