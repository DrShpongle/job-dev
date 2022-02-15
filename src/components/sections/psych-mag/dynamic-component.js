import Hero from './hero'
import Features from './features'
import TopTips from './top-tips'
import Gear from './gear'
import TravelGuides from './travel-guides'
import Page from './page'

const Components = {
  hero: Hero,
  features: Features,
  topTips: TopTips,
  gear: Gear,
  travelGuides: TravelGuides,
  page: Page,
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]

    return <Component blok={blok} key={blok._uid} />
  }

  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
