import * as React from 'react'
import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: 'xF9T9KwYPr5rKrGVW8Unlwtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export default Storyblok

export function useStoryblok(originalStory, preview) {
  let [story, setStory] = React.useState(originalStory)

  // adds the events for updating the visual editor
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#initializing-the-storyblok-js-bridge
  function initEventListeners() {
    const {StoryblokBridge} = window
    if (typeof StoryblokBridge !== 'undefined') {
      // const storyblokInstance = new StoryblokBridge()
      const storyblokInstance = new StoryblokBridge({
        resolveRelations: ['psychMag.featured_articles', 'article.category'],
      })

      // reload on Next.js page on save or publish event in the Visual Editor
      storyblokInstance.on(['change', 'published'], () => location.reload(true))

      // live update the story on input events
      storyblokInstance.on('input', (event) => {
        if (event.story._uid === story._uid) {
          setStory(event.story)
        }
      })

      storyblokInstance.on('enterEditmode', (event) => {
        // loading the draft version on initial enter of editor
        Storyblok.get(`cdn/stories/${event.storyId}`, {
          version: 'draft',
          resolveRelations: ['psychMag.featured_articles', 'article.category'],
          // resolve_relations: ['featured-posts.posts', 'selected-posts.posts'],
        })
          .then(({data}) => {
            if (data.story) {
              setStory(data.story)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  }

  // appends the bridge script tag to our document
  // see https://www.storyblok.com/docs/guide/essentials/visual-editor#installing-the-storyblok-js-bridge
  function addBridge(callback) {
    // check if the script is already present
    const existingScript = document.getElementById('storyblokBridge')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = '//app.storyblok.com/f/storyblok-v2-latest.js'
      script.id = 'storyblokBridge'
      document.body.appendChild(script)
      script.onload = () => {
        // once the scrip is loaded, init the event listeners
        callback()
      }
    } else {
      callback()
    }
  }

  React.useEffect(() => {
    // only load inside preview mode
    if (preview) {
      // first load the bridge, then initialize the event listeners
      addBridge(initEventListeners)
    }
  }, [])

  React.useEffect(() => {
    setStory(originalStory)
  }, [originalStory])

  return story
}
