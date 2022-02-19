import PageLayout from 'components/layouts/page-layout'
import DynamicComponent from './dynamic-component'

const Page = ({blok}) => (
  <PageLayout>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </PageLayout>
)

export default Page
