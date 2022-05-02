import Storyblok, {useStoryblok} from 'utils/storyblok-service'
import axios from 'axios'
import {isEmpty} from 'lodash'

const allCategories = [
  '3a74027d-ae5a-49ca-82aa-a4a13a017d9c',
  'dd9b6f76-022d-4d6a-bc70-11e806944a0a',
  '960103db-81c4-4100-a374-27f1785fed32',
  'a95f141f-d357-43c2-94ae-93dea86ec306',
  '44efe4b4-1add-435c-bb18-16fdb7823dfb',
]

// const getAllArticles = async (per_page: number = 6, page: number = 1) => {
//   try {
//     const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=${
//       process.env.NEXT_PUBLIC_STORYBLOK_API_KEY
//     }&starts_with=articles/&sort_by=published_at:asc&filter_query[category][any_in_array]=${allCategories.join(
//       ',',
//     )}&per_page=${per_page}&page=${page}`
//     const {
//       data: {stories},
//     } = await axios.get(requestUrl)
//     // console.log('stories:', stories)
//     return stories
//   } catch (err) {
//     console.error('getAllArticles', err)
//     return null
//   }
// }

// const getAllArticlesByCategory = async (category: string) => {
//   try {
//     const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=${
//       process.env.NEXT_PUBLIC_STORYBLOK_API_KEY
//     }&starts_with=articles/&sort_by=published_at:asc&filter_query[category][any_in_array]=${allCategories.join(
//       ',',
//     )}`
//     const {
//       data: {stories},
//     } = await axios.get(requestUrl)
//     console.log('stories:', stories)
//     return stories
//   } catch (err) {
//     console.error('getAllArticles', err)
//     return null
//   }
// }

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

const getArticlesAmount = async (category: string) => {
  const categories = category === 'all' ? allCategories.join(',') : category
  const initial = await Storyblok.client.head(
    `https://api.storyblok.com/v2/cdn/stories/?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}&starts_with=articles/&sort_by=published_at:asc&filter_query[category][any_in_array]=${categories}`,
    {
      params: {token: Storyblok.accessToken},
    },
  )
  return initial
}

const getArticlesByCategory = async (
  category: string,
  per_page: number = 6,
  page: number = 1,
) => {
  const categories = category === 'all' ? allCategories.join(',') : category
  console.log('categories11:', categories)
  try {
    const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}&starts_with=articles/&sort_by=published_at:asc&filter_query[category][any_in_array]=${categories}&per_page=${per_page}&page=${page}`
    const {
      data: {stories},
    } = await axios.get(requestUrl)
    return stories
  } catch (err) {
    console.error('getArticlesByCategory', err)
    return null
  }
}

// const getArticlesByCategory = async (
//   category: string,
//   per_page: number = 6,
//   page: number = 1,
// ) => {
//   const categories = category === 'any' ? allCategories.join(',') : category
//   try {
//     const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}&starts_with=articles/&sort_by=published_at:asc&filter_query[category][any_in_array]=${categories}&per_page=${per_page}&page=${page}`
//     const {
//       data: {stories},
//     } = await axios.get(requestUrl)
//     return stories
//   } catch (err) {
//     console.error('getArticlesByCategory', err)
//     return null
//   }
// }

export {
  // getAllArticles,
  getFeaturedArticles,
  getArticlesByCategory,
  getArticlesAmount,
  // getAllArticlesByCategory,
}
