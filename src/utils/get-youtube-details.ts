import axios from 'axios'

const YT_API_KEY = 'AIzaSyCnPv9L7g7ZB0wJh9w02ajbNi8CL91djdI'
const YT_CHANNEL_ID = 'UCo_q6aOlvPH7M-j_XGWVgXg'
const MAX_VIDEOS = 5
const API_ROOT = 'https://youtube.googleapis.com/youtube/v3'

const formatDate = (apiDate: any) => {
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

const formatDuration = (duration: any) => {
  var a = duration.match(/\d+/g)
  if (
    duration.indexOf('M') >= 0 &&
    duration.indexOf('H') == -1 &&
    duration.indexOf('S') == -1
  ) {
    a = [0, a[0], 0]
  }
  if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
    a = [a[0], 0, a[1]]
  }
  if (
    duration.indexOf('H') >= 0 &&
    duration.indexOf('M') == -1 &&
    duration.indexOf('S') == -1
  ) {
    a = [a[0], 0, 0]
  }
  duration = 0
  if (a.length == 3) {
    duration = duration + parseInt(a[0]) * 3600
    duration = duration + parseInt(a[1]) * 60
    duration = duration + parseInt(a[2])
  }

  if (a.length == 2) {
    duration = duration + parseInt(a[0]) * 60
    duration = duration + parseInt(a[1])
  }

  if (a.length == 1) {
    duration = duration + parseInt(a[0])
  }
  const hours = Math.floor(duration / 3600)
  const mins = hours
    ? Math.floor((duration - hours * 3600) / 60)
    : Math.floor(duration / 60)
  const seconds = duration - hours * 3600 - mins * 60
  return `${hours > 0 ? hours + ':' : ''}${mins ? mins + ':' : '0:'}${
    seconds < 10 ? '0' + seconds : seconds
  }`.trim()
}

export const getYoutubeDetails = async () => {
  try {
    const requestChannelData: string = `${API_ROOT}/search?part=snippet&channelId=${YT_CHANNEL_ID}&maxResults=${MAX_VIDEOS}&order=date&type=video&key=${YT_API_KEY}`
    const {
      data: {items: channelData = []},
    } = await axios.get(requestChannelData)
    const intermediateDetails = channelData.map((item: any) => {
      return {
        id: item.id.videoId,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      }
    })
    const ids = channelData.map(({id: {videoId}}: any) => videoId).join(',')
    const requestVideosData: string = `${API_ROOT}/videos?part=snippet,contentDetails&id=${ids}&key=${YT_API_KEY}`
    const {
      data: {items: videosData = []},
    } = await axios.get(requestVideosData)
    const finalDetails = videosData.map((item: any) => {
      return {
        ...intermediateDetails.find(
          (itemToFind: any) => itemToFind.id === item.id,
        ),
        thumb: item.snippet.thumbnails.standard.url,
        title: item.snippet.title,
        duration: formatDuration(item.contentDetails.duration),
        date: formatDate(item.snippet.publishedAt),
      }
    })
    return finalDetails
  } catch (err) {
    console.error('getYoutubeDetails', err)
    return null
  }
}
