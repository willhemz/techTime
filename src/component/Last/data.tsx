import { IconType } from 'react-icons'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDiscord,
} from 'react-icons/fa'

export interface LogoType {
  [index: string]: JSX.Element | string
  link: string
}

export type LogoArray = LogoType[]

export const logos: LogoArray = [
  { name: <FaFacebook />, link: 'https://facebook.com' },
  { name: <FaTwitter />, link: 'https://twitter.com' },
  { name: <FaYoutube />, link: 'https://youtube.com' },
  { name: <FaInstagram />, link: 'https://instagram.com' },
  { name: <FaDiscord />, link: 'https://discord.com' },
]

export type LinksType = {
  [index: string]: string
}[]

export type LinksObj = {
  name: string
  links: LinksType
}

export type LinksArray = LinksObj[]

export const linksArray: LinksArray = [
  {
    name: 'useful links',
    links: [
      { title: 'home', link: 'home' },
      { title: 'about us', link: 'about-us' },
      { title: 'our courses', link: 'our-course' },
      { title: 'testimonials', link: 'testimonials' },
      { title: 'our community', link: 'our-community' },
    ],
  },
  {
    name: 'community',
    links: [
      { title: 'help centers', link: 'help-centers' },
      { title: 'partners', link: 'partners' },
      { title: 'suggestion', link: 'suggestion' },
      { title: 'blog', link: 'blog' },
      { title: 'newsletter', link: 'newsletter' },
    ],
  },
]
