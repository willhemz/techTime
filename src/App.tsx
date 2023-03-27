import { ReactElement } from 'react'
import {
  Eight,
  Fifth,
  First,
  Fourth,
  Last,
  MbScrollToTopBtn,
  Ninth,
  ScrollToTop,
  Second,
  Seventh,
  Sixth,
  Third,
} from './component'

const App = (): ReactElement => {
  const content: ReactElement = (
    <div className='app'>
      <ScrollToTop>
        <First />
        <main className='w-full'>
          <Second />
          <Third />
          <Fourth />
          <Fifth />
          <Sixth />
          <Seventh />
          <Eight />
          <Ninth />
        </main>
        <Last />
        <MbScrollToTopBtn />
      </ScrollToTop>
    </div>
  )
  return content
}

export default App
