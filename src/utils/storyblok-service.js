import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
  accessToken: 'xF9T9KwYPr5rKrGVW8Unlwtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
})

export default Storyblok
