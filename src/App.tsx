import { ReactElement } from 'react'
import { First, Second, Third } from './component'

const App = (): ReactElement => {
  const content: ReactElement = (
    <div className='app'>
      <First />
      <main className='w-full'>
        <Second />
        <Third />
      </main>
    </div>
  )
  return content
}

export default App
