import { ReactElement } from 'react'
import { Fifth, First, Fourth, Second, Sixth, Third } from './component'

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
      </main>
    </div>
  )
  return content
}

export default App
