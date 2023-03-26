import { ReactElement } from 'react'
import { images, ImageType } from './data'

const Third = (): ReactElement => {
  const { logo }: ImageType = images

  const content: ReactElement = (
    <article className='third'>
      <div className='third__content'>
        {Object.values(logo).map((item, index) => {
          return (
            <img
              className='w-[38.59px] h-[8.75px] md:scale-150 lg:scale-100 lg:w-[130px] lg:h-[30px]'
              src={item}
              key={index}
              alt=''
            />
          )
        })}
      </div>
    </article>
  )

  return content
}

export default Third
