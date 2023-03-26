import { ReactElement } from 'react'
import {
  Eight,
  Fifth,
  First,
  Fourth,
  Last,
  Ninth,
  Second,
  Seventh,
  Sixth,
  Third,
} from './component'

const App = (): ReactElement => {
  const content: ReactElement = (
    <div className='app'>
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
    </div>
  )
  return content
}

export default App
