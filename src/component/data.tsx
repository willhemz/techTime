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
