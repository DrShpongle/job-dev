import axios from 'axios'

export const getArticlesByCategory = async (category: string) => {
  try {
    const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=xF9T9KwYPr5rKrGVW8Unlwtt&starts_with=articles/&filter_query[category][any_in_array]=${category}`
    // const requestUrl: string = `https://api.storyblok.com/v1/cdn/stories?token=xF9T9KwYPr5rKrGVW8Unlwtt&cv=1645459847&starts_with=articles/&filter_query[category][any_in_array]=${category}`
    const {
      data: {stories},
    } = await axios.get(requestUrl)
    return stories
  } catch (err) {
    console.error('getArticlesByCategory', err)
    return null
  }
}
