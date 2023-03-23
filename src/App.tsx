import { ReactElement } from 'react'
import { First, Second } from './component'

const App = (): ReactElement => {
  const content: ReactElement = (
    <div className='app'>
      <First />
      <main className='w-full'>
        <Second />
      </main>
    </div>
  )
  return content
}

export default App
