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

export type ImageType = {
  people: string
  hero: string
  arrow: string
  wire: string
  greeny: string
  yello: string
}
export const images: ImageType = { people, hero, arrow, wire, greeny, yello }
