import axios from 'axios'

// const YT_API_KEY = 'AIzaSyCnyBySyZkKDz4YLo9P1WNdbZoxjHf0l2o'
const YT_API_KEY = 'AIzaSyCnPv9L7g7ZB0wJh9w02ajbNi8CL91djdI'
const YT_CHANNEL_ID = 'UCXgGY0wkgOzynnHvSEVmE3A'
// const YT_CHANNEL_ID = 'UCrjEt9O_vAb2Dc9sOSs0fYQ'
const MAX_VIDEOS = 3
const API_ROOT = 'https://youtube.googleapis.com/youtube/v3'

export const getYoutubeDetails = async () => {
  try {
    const requestUrl: string = `${API_ROOT}/search?part=snippet&channelId=${YT_CHANNEL_ID}&maxResults=${MAX_VIDEOS}&order=date&type=video&key=${YT_API_KEY}`
    const {
      data: {items = []},
    } = await axios.get(requestUrl)
    console.log('items:', items)
    const ids = items.map(({id: {videoId}}) => videoId).join(',')
    // console.log('ids:', ids)
    const requestUrl2: string = `${API_ROOT}/videos?part=snippet,contentDetails&id=${ids}&key=${YT_API_KEY}`
    const {
      data: {items: items2 = []},
    } = await axios.get(requestUrl2)
    console.log('items2', items2)
    // const aaa = items2.map(({id: {videoId}}) => videoId).join(',')
    return items2
  } catch (err) {
    console.error('getYoutubeDetails', err)
    return null
  }
}

// export const getYoutubeDetails = async () => {
//   try {
//     const requestUrl: string = `${API_ROOT}/search?part=snippet&channelId=${YT_CHANNEL_ID}&maxResults=${MAX_VIDEOS}&order=date&type=video&key=${YT_API_KEY}`
//     const {
//       data: {items = []},
//     } = await axios.get(requestUrl)
//     console.log('items:', items)
//     const ids = items.map(({id: {videoId}}) => videoId).join(',')
//     // console.log('ids:', ids)
//     const requestUrl2: string = `${API_ROOT}/videos?part=snippet,contentDetails&id=${ids}&key=${YT_API_KEY}`
//     const {
//       data: {items: items2 = []},
//     } = await axios.get(requestUrl2)
//     console.log('items2', items2)
//     // const aaa = items2.map(({id: {videoId}}) => videoId).join(',')
//     return items2
//   } catch (err) {
//     console.error('getYoutubeDetails', err)
//     return null
//   }
// }
