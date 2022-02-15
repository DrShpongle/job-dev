import axios from 'axios'

export const getYoutubeDetails = async (id: string) => {
  const requestUrl: string = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBUSLTF-oPIAW0gPwp0NCIPX5VgksnjjeM&part=snippet,contentDetails`
  const result = await axios.get(requestUrl)
  return result.data
}
