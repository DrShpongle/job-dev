export const categories = {
  all: {
    id: [
      process.env.NEXT_PUBLIC_CATEGORY_ID_FEATURES,
      process.env.NEXT_PUBLIC_CATEGORY_ID_VLOG,
      process.env.NEXT_PUBLIC_CATEGORY_ID_TOP_TIPS,
      process.env.NEXT_PUBLIC_CATEGORY_ID_GEAR,
      process.env.NEXT_PUBLIC_CATEGORY_ID_TRAVEL_GUIDES,
    ].join(','),
    slug: 'all',
    title: 'all',
  },
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
