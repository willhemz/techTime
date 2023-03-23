import { ReactElement } from 'react'
import { First } from './component'

const App = (): ReactElement => {
  const content: ReactElement = (
    <div className='app'>
      <First />
    </div>
  )
  return content
}

export default App
