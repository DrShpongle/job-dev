import ScrollableHero from 'components/sections/home/scrollable-hero'
import GetSurfApp from 'components/sections/home/get-surf-app'
import GetPsyched from 'components/sections/home/get-psyched'
import BePsyched from 'components/sections/home/be-psyched'
import StayPsyched from 'components/sections/home/stay-psyched'
import Vlog from 'components/sections/home/vlog'
import PsychMag from 'components/sections/home/psych-mag'
import SeaTrees from 'components/sections/home/sea-trees'
import PsychMagHero from 'components/sections/psych-mag/psych-mag-hero'
import Features from 'components/sections/psych-mag/features'
import TopTips from 'components/sections/psych-mag/top-tips'
import Gear from 'components/sections/psych-mag/gear'
import TravelGuides from 'components/sections/psych-mag/travel-guides'
import AboutHero from 'components/sections/about/about-hero'
import PromoVideos from 'components/sections/about/promo-videos'
import JamieInTheWater from 'components/sections/about/jamie-in-the-water'
import HeroWithScrollingText from 'components/sections/surf-app/hero-with-scrolling-text'
import AskJamie from 'components/sections/surf-app/ask-jamie'
import LearnFromTheBest from 'components/sections/surf-app/learn-from-the-best'
import VisualiseAndDo from 'components/sections/surf-app/visualise-and-do'
import FullyLoaded from 'components/sections/surf-app/fully-loaded'
import SuccessPoints from 'components/sections/surf-app/success-points'
import NewContent from 'components/sections/surf-app/new-content'
import Article from './article'
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
  psychMagHero: PsychMagHero,
  features: Features,
  topTips: TopTips,
  gear: Gear,
  travelGuides: TravelGuides,
  aboutHero: AboutHero,
  section_1: PromoVideos,
  section_2: JamieInTheWater,
  heroWithScrollingText: HeroWithScrollingText,
  askJamie: AskJamie,
  learnFromTheBest: LearnFromTheBest,
  visualiseAndDo: VisualiseAndDo,
  fullyLoaded: FullyLoaded,
  successPoints: SuccessPoints,
  newContent: NewContent,
  article: Article,
  page: Page,
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default DynamicComponent
