type PropsType = {
  id: number
  name: string
  link: string
}

export type PropsArray = PropsType[]

export const data: PropsArray = [
  { id: 1, name: 'Home', link: '#home' },
  { id: 2, name: 'About Us', link: '#about-us' },
  { id: 3, name: 'Courses', link: '#courses' },
  { id: 4, name: 'Testimonial', link: '#testimonial' },
  { id: 5, name: 'Community', link: '#community' },
]

const people: string = new URL('../assets/images/people.png', import.meta.url)
  .href

const hero: string = new URL('../assets/images/hero.png', import.meta.url).href

const arrow: string = new URL('../assets/images/arrow.png', import.meta.url)
  .href

const wire: string = new URL('../assets/images/wire.png', import.meta.url).href

const greeny: string = new URL('../assets/images/greeny.png', import.meta.url)
  .href

const yello: string = new URL('../assets/images/yello.png', import.meta.url)
  .href

const zoom: string = new URL('../assets/images/zoom.png', import.meta.url).href

const stripe: string = new URL('../assets/images/stripe.png', import.meta.url)
  .href

const monday: string = new URL('../assets/images/monday.png', import.meta.url)
  .href

const slack: string = new URL('../assets/images/slack.png', import.meta.url)
  .href

const dropbox: string = new URL('../assets/images/dropbox.png', import.meta.url)
  .href

const audio: string = new URL('../assets/images/audio.png', import.meta.url)
  .href

const live: string = new URL('../assets/images/live.png', import.meta.url).href

const video: string = new URL('../assets/images/video.png', import.meta.url)
  .href

const notes: string = new URL('../assets/images/notes.png', import.meta.url)
  .href

const crownQuote: string = new URL(
  '../assets/images/quote.png',
  import.meta.url
).href

const study: string = new URL('../assets/images/study.png', import.meta.url)
  .href

const bgAbout: string = new URL('../assets/images/bgAbout.png', import.meta.url)
  .href

const learning: string = new URL(
  '../assets/images/learning.png',
  import.meta.url
).href

const wifi: string = new URL('../assets/images/wifi.png', import.meta.url).href

const clock: string = new URL('../assets/images/clock.png', import.meta.url)
  .href

const price: string = new URL('../assets/images/price.png', import.meta.url)
  .href

const users: string = new URL('../assets/images/users.png', import.meta.url)
  .href

const bgContext: string = new URL(
  '../assets/images/bgContext.png',
  import.meta.url
).href

export type ClassImage = { name: string; text: string }

export type ArtType = { name: string; title: string; text: string }

export type ImageType = {
  people: string
  hero: string
  arrow: string
  wire: string
  greeny: string
  yello: string
  study: string
  crownQuote: string
  learning: string
  bgAbout: string
  bgContext: string
  logo: object
  classes: ClassImage[]
  art: ArtType[]
}

export const images: ImageType = {
  people,
  hero,
  arrow,
  wire,
  greeny,
  yello,
  study,
  bgAbout,
  bgContext,
  learning,
  logo: { zoom, stripe, monday, slack, dropbox },
  classes: [
    { name: audio, text: 'Audio Classes' },
    { name: live, text: 'Live Classes' },
    { name: video, text: 'Recorded Classes' },
    { name: notes, text: '50+ Classes' },
  ],
  crownQuote,
  art: [
    {
      name: wifi,
      title: 'Experienced Mentor',
      text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
    },
    {
      name: clock,
      title: 'one-on-one meetings',
      text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
    },
    {
      name: users,
      title: 'one-on-one meetings',
      text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
    },
    {
      name: price,
      title: 'affordable prices',
      text: 'high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.',
    },
  ],
}
