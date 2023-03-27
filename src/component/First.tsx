import { ReactElement, useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { data } from './data'

const First = (): ReactElement => {
  const [viewLinks, setViewLinks] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null!)
  const elementRef = useRef<HTMLUListElement>(null!)
  const [linkValue, setLinkValue] = useState<string>('Home')

  useEffect((): void => {
    const conHeight: number = elementRef.current.getBoundingClientRect().height
    if (viewLinks) containerRef.current.style.height = `${conHeight}px`
    else containerRef.current.style.height = '0px'
  }, [viewLinks])

  const content: ReactElement = (
    <header className='header'>
      <nav className='header__content'>
        <div className='header__content__logo'>TechTime</div>
        <div
          ref={containerRef}
          className={`header__content__linksWrapper ${
            viewLinks ? 'border-b' : 'modifier'
          }`}>
          <ul
            ref={elementRef}
            className={`flex-col md:flex-row items-center gap-6 w-full lg:w-[70.5%] md:h-[40.7%] ${
              !viewLinks ? 'hidden md:flex' : 'flex'
            }`}>
            {data.map((item) => {
              return (
                <li
                  onClick={() => {
                    setLinkValue(item.name)
                    setViewLinks(false)
                  }}
                  className={`header__content__links--url p-3 md:p-0 lg:0 ${
                    linkValue === item.name ? 'text-white' : 'text-bluT'
                  }`}
                  key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            })}
          </ul>
          <button className='hidden md:block btn btn__white header__btn--modifier'>
            Enroll Now
          </button>
        </div>
        <button
          className={`md:hidden header__btnList transition-all ease-linear duration-300 ${
            viewLinks && ' rotate-[-90deg]'
          }`}
          onClick={(): void => setViewLinks(!viewLinks)}>
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  )
  return content
}

export default First
