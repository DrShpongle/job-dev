import Storyblok from 'utils/storyblok-service'
import axios from 'axios'
import {isEmpty} from 'lodash'

// TODO
const allCategories = [
  process.env.NEXT_PUBLIC_CATEGORY_ID_FEATURES,
  process.env.NEXT_PUBLIC_CATEGORY_ID_VLOG,
  process.env.NEXT_PUBLIC_CATEGORY_ID_TOP_TIPS,
  process.env.NEXT_PUBLIC_CATEGORY_ID_GEAR,
  process.env.NEXT_PUBLIC_CATEGORY_ID_TRAVEL_GUIDES,
]

const categories = {
  features: {
    id: process.env.NEXT_PUBLIC_CATEGORY_ID_FEATURES,
    slug: 'features',
    title: 'features',
  },
  vlog: {
    id: process.env.NEXT_PUBLIC_CATEGORY_ID_VLOG,
    slug: 'vlog',
    title: 'vlog',
  },
  'top-tips': {
    id: process.env.NEXT_PUBLIC_CATEGORY_ID_TOP_TIPS,
    slug: 'top-tips',
    title: 'top tips',
  },
  gear: {
    id: process.env.NEXT_PUBLIC_CATEGORY_ID_GEAR,
    slug: 'gear',
    title: 'gear',
  },
  'travel-guides': {
    id: process.env.NEXT_PUBLIC_CATEGORY_ID_TRAVEL_GUIDES,
    slug: 'travel-guides',
    title: 'travel guides',
  },
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
  try {
    const requestUrl: string = `https://api.storyblok.com/v2/cdn/stories/?token=${process.env.NEXT_PUBLIC_STORYBLOK_API_KEY}&starts_with=articles/&sort_by=published_at:desc&filter_query[category][any_in_array]=${categories}&per_page=${per_page}&page=${page}`
    const {
      data: {stories},
    } = await axios.get(requestUrl)
    return stories
  } catch (err) {
    console.error('getArticlesByCategory', err)
    return null
  }
}

const getCategoryName = (categoryId: string) => {
  const categoryKey = (
    Object.keys(categories) as Array<keyof typeof categories>
  ).find((key) => categories[key].id === categoryId)
  return categoryKey ? categories[categoryKey].title : ''
}

export {
  getFeaturedArticles,
  getArticlesByCategory,
  getArticlesAmount,
  getCategoryName,
}
