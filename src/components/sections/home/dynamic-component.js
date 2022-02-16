import ScrollableHero from './scrollable-hero'
import GetSurfApp from './get-surf-app'
import GetPsyched from './get-psyched'
import BePsyched from './be-psyched'
import StayPsyched from './stay-psyched'
import Vlog from './vlog'
import PsychMag from './psych-mag'
import SeaTrees from './sea-trees'
import Page from './page'

const Components = {
  scrollableHero: ScrollableHero,
  getSurfApp: GetSurfApp,
  getPsyched: GetPsyched,
  bePsyched: BePsyched,
  stayPsyched: StayPsyched,
  vlog: Vlog,
  psychMag: PsychMag,
  seaTrees: SeaTrees,
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