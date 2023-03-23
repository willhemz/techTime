import { ReactElement } from 'react'
import { data } from './data'

const First = (): ReactElement => {
  const content: ReactElement = (
    <header className='header'>
      <nav className='header__content'>
        <div className='header__content__logo'>TechTime</div>
        <div className='header__content__links'>
          <ul className='header__content__links--url'>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            })}
          </ul>
          <button className='btn btn__white'>Enroll Now</button>
        </div>
      </nav>
    </header>
  )
  return content
}

export default First
