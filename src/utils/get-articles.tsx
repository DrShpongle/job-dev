import axios from 'axios'
import {isEmpty} from 'lodash'

const getAllArticles = async (per_page: number = 6, page: number = 1) => {
  // const uuids = isEmpty(arr) ? [] : arr.join(',')
  try {
    // const requestUrl: string = `https://api.storyblok.com/v1/cdn/stories?by_uuids=${uuids}&resolve_relations=article.category&token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}`
    const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}&starts_with=articles/&sort_by=published_at:asc&per_page=${per_page}&page=1`
    const {
      data: {stories},
    } = await axios.get(requestUrl)
    return stories
  } catch (err) {
    console.error('getAllArticles', err)
    return null
  }
}

const getFeaturedArticles = async (arr: string[]) => {
  const uuids = isEmpty(arr) ? [] : arr.join(',')
  try {
    const requestUrl: string = `https://api.storyblok.com/v1/cdn/stories?by_uuids=${uuids}&resolve_relations=article.category&token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}`
    const {
      data: {stories},
    } = await axios.get(requestUrl)
    return stories
  } catch (err) {
    console.error('getFeaturedArticles', err)
    return null
  }
}

const getArticlesByCategory = async (category: string) => {
  try {
    const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}&starts_with=articles/&filter_query[category][any_in_array]=${category}&per_page=100`
    const {
      data: {stories},
    } = await axios.get(requestUrl)
    return stories
  } catch (err) {
    console.error('getArticlesByCategory', err)
    return null
  }
}

export {getAllArticles, getFeaturedArticles, getArticlesByCategory}
