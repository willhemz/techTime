import { ReactElement } from 'react'
import { images, ImageType } from './data'

const Third = (): ReactElement => {
  const { logo }: ImageType = images

  const content: ReactElement = (
    <article className='third'>
      <div className='third__content'>
        {Object.values(logo).map((item, index) => {
          return <img src={item} key={index} alt='' />
        })}
      </div>
    </article>
  )

  return content
}

export default Third
