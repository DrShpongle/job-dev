import axios from 'axios'

const YT_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const YT_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
const MAX_VIDEOS = process.env.NEXT_PUBLIC_YOUTUBE_MAX_VIDEOS
const API_ROOT = process.env.NEXT_PUBLIC_YOUTUBE_API_ROOT

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
        thumb: item.snippet.thumbnails.high.url,
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
