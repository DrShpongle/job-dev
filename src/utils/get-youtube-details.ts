import axios from 'axios'

const YT_API_KEY = 'AIzaSyCnPv9L7g7ZB0wJh9w02ajbNi8CL91djdI'
const YT_CHANNEL_ID = 'UCo_q6aOlvPH7M-j_XGWVgXg'
const MAX_VIDEOS = 5
const API_ROOT = 'https://youtube.googleapis.com/youtube/v3'

// const durationToSeconds = (duration) => {
//   var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/)

//   match = match.slice(1).map(function (x) {
//     if (x != null) {
//       return x.replace(/\D/, '')
//     }
//   })

//   var hours = parseInt(match[0]) || 0
//   var minutes = parseInt(match[1]) || 0
//   var seconds = parseInt(match[2]) || 0

//   return hours * 3600 + minutes * 60 + seconds
// }

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
        // duration: durationToSeconds(item.contentDetails.duration),
        duration: item.contentDetails.duration,
        date: item.snippet.publishedAt,
      }
    })
    return finalDetails
  } catch (err) {
    console.error('getYoutubeDetails', err)
    return null
  }
}
