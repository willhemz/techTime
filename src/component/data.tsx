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

export type ImageType = {
  people: string
  hero: string
  arrow: string
  wire: string
  greeny: string
  yello: string
  logo: object
}
export const images: ImageType = {
  people,
  hero,
  arrow,
  wire,
  greeny,
  yello,
  logo: { zoom, stripe, monday, slack, dropbox },
}
