import { ReactElement } from 'react'
import {
  Eight,
  Fifth,
  First,
  Fourth,
  Ninth,
  Second,
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
        <Eight />
        <Ninth />
      </main>
    </div>
  )
  return content
}

export default App
