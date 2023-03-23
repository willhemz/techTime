import { ReactElement } from 'react'
import { First, Fourth, Second, Third } from './component'

const App = (): ReactElement => {
  const content: ReactElement = (
    <div className='app'>
      <First />
      <main className='w-full'>
        <Second />
        <Third />
        <Fourth />
      </main>
    </div>
  )
  return content
}

export default App
