import {NextSeo} from 'next-seo'
import Script from 'next/script'

import DynamicComponent from 'components/dynamic-component'
import Storyblok, {useStoryblok} from 'utils/storyblok-service'

export default function Page(props) {
  const {story, preview} = props
  const enableBridge = true
  const actualStory = useStoryblok(story, enableBridge)
  const defaultSeoImage = `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/images/og-image.png`
  const seoPage =
    actualStory.content.component === 'page'
      ? actualStory.content?.seo?.[0]
      : {}
  const seoArticle =
    actualStory.content.component === 'article'
      ? {
          title: actualStory.content.title,
          description: actualStory.content.short_description,
          image: actualStory.content.hero_image,
        }
      : {}

  let seo = {}

  switch (actualStory.content.component) {
    case 'page':
      seo = seoPage
      break
    case 'article':
      seo = seoArticle
      break
    default:
      seo = {}
  }

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.description}
        canonical={`${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}${
          actualStory.content.component === 'article' ? '/articles/' : '/'
        }${actualStory.slug === 'home' ? '' : actualStory.slug}`}
        openGraph={{
          title: seo.title,
          description: seo.description,
          url: `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}${
            actualStory.content.component === 'article' ? '/articles/' : '/'
          }${actualStory.slug === 'home' ? '' : actualStory.slug}`,
          images: [
            {
              url: seo?.image?.filename || defaultSeoImage,
            },
          ],
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3DDEV708JB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3DDEV708JB', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '671463990803677'); 
          fbq('track', 'PageView');
        `}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          var _urconfig = { sid: "7db37aa7-69a0-46db-91c5-4c651977a521", aip: 0, usePageProtocol: false };
          (function (d, s) {
              var js = d.createElement(s),
                  sc = d.getElementsByTagName(s)[0];
              js.src = "https://hit.uptrendsdata.com/rum.min.js";
              js.async = "async";
              sc.parentNode.insertBefore(js, sc);
          }(document, "script"));
        `}
      </Script>
      <DynamicComponent blok={actualStory.content} />
    </>
  )
}

export async function getStaticProps({params, preview = false}) {
  let slug = params.slug ? params.slug.join('/') : 'home'

  let sbParams = {
    version: 'published',
  }

  if (preview) {
    sbParams.version = 'draft'
    sbParams.cv = Date.now()
  }

  let {data} = await Storyblok.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : false,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  }
}

export async function getStaticPaths() {
  let {data} = await Storyblok.get('cdn/links/')

  let paths = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return
    }

    const slug = data.links[linkKey].slug
    let splittedSlug = slug.split('/')
    if (slug === 'home') splittedSlug = false

    paths.push({params: {slug: splittedSlug}})
  })

  return {
    paths: paths,
    fallback: false,
  }
}
