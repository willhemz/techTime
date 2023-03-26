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

const userResearch: string = new URL(
  '../assets/images/userResearch.png',
  import.meta.url
).href

const audience: string = new URL(
  '../assets/images/audience.png',
  import.meta.url
).href

const bootstrap: string = new URL(
  '../assets/images/bootstrap.png',
  import.meta.url
).href

const learnjs: string = new URL('../assets/images/learnjs.png', import.meta.url)
  .href

const marketing: string = new URL(
  '../assets/images/marketing.png',
  import.meta.url
).href

const liveMarket: string = new URL(
  '../assets/images/liveMarket.png',
  import.meta.url
).href

const leonard: string = new URL('../assets/images/leonard.png', import.meta.url)
  .href

const jeffrey: string = new URL('../assets/images/jeffrey.png', import.meta.url)
  .href

const claretta: string = new URL(
  '../assets/images/claretta.png',
  import.meta.url
).href

const jessica: string = new URL('../assets/images/jessica.png', import.meta.url)
  .href

const samuel: string = new URL('../assets/images/samuel.png', import.meta.url)
  .href

const adam: string = new URL('../assets/images/adam.png', import.meta.url).href

const schedule: string = new URL(
  '../assets/images/schedule.png',
  import.meta.url
).href

const grade: string = new URL('../assets/images/grade.png', import.meta.url)
  .href

const menu_book: string = new URL(
  '../assets/images/menu_book.png',
  import.meta.url
).href

const bgMod: string = new URL('../assets/images/bgMod.png', import.meta.url)
  .href

const techstars: string = new URL(
  '../assets/images/techstars.png',
  import.meta.url
).href

const arrInvert: string = new URL(
  '../assets/images/arrInvert.png',
  import.meta.url
).href

const bgAbt: string = new URL('../assets/images/bgAbt.png', import.meta.url)
  .href

export type ClassImage = { name: string; text: string }

export type ArtType = { name: string; title: string; text: string }

export type CourseType = {
  image: string
  category: string
  rating: string
  members: string
  title: string
  duration: string
  lessons: number
  avatar: string
  tutor: string
  price: string
}

type PriceFunc = (val: number) => string

const handlePrice: PriceFunc = (val: number): string => {
  return new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  }).format(val)
}

export type Programs = CourseType[]

const programs: Programs = [
  {
    image: userResearch,
    category: 'Design',
    rating: '4.7k',
    members: ' 32.7k+',
    title: 'Introduction to user research in UX Design',
    duration: '23hrs 50mins',
    lessons: 15,
    avatar: leonard,
    tutor: 'Leonard Victor',
    price: handlePrice(15),
  },
  {
    image: audience,
    category: 'Marketing',
    rating: '4.7k',
    members: ' 8.7k+',
    title: 'Introduction to new marketing audience',
    duration: '22hrs 50mins',
    lessons: 22,
    avatar: jeffrey,
    tutor: 'Jeffrey Williams',
    price: handlePrice(32),
  },
  {
    image: bootstrap,
    category: 'Development',
    rating: '4.7k',
    members: ' 12.7k+',
    title: 'Introduction to HTL, CSS & Bootstrap',
    duration: '45hrs 50mins',
    lessons: 55,
    avatar: claretta,
    tutor: 'Claretta Mason',
    price: handlePrice(55),
  },
  {
    image: learnjs,
    category: 'Development',
    rating: '4.7k',
    members: ' 32.7k+',
    title: 'Introduction to javascript, Git & Github',
    duration: '30hrs 50mins',
    lessons: 22,
    avatar: jessica,
    tutor: 'Jessica Duke',
    price: handlePrice(45),
  },
  {
    image: marketing,
    category: 'Marketing',
    rating: '4.7k',
    members: ' 4.7k+',
    title: 'Introduction to outroom marketing analysis',
    duration: '33hrs 50mins',
    lessons: 26,
    avatar: samuel,
    tutor: 'Samuel Jacobs',
    price: handlePrice(25),
  },
  {
    image: liveMarket,
    category: 'Marketing',
    rating: '4.7k',
    members: ' 15.7k+',
    title: 'Introduction to live marketing analysis',
    duration: '10hrs 50mins',
    lessons: 32,
    avatar: adam,
    tutor: 'Adam Smith',
    price: handlePrice(25),
  },
]

export const categories: string[] = [
  'All Categories',
  'Design',
  'Development',
  'Marketing',
]

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
  arrInvert: string
  bgAbt: string
  logo: object
  classes: ClassImage[]
  art: ArtType[]
  programs: Programs
  categories: string[]
  schedule: string
  grade: string
  menu_book: string
  bgMod: string
  techstars: string
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
  schedule,
  grade,
  arrInvert,
  menu_book,
  bgMod,
  techstars,
  bgAbt,
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
  programs,
  categories,
}
