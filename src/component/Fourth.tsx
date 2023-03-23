import { ReactElement } from 'react'
import { ClassImage, images, ImageType } from './data'

const Fourth = (): ReactElement => {
  const { classes, crownQuote, study, people, bgAbout }: ImageType = images
  const first: ReactElement = (
    <header className='fourth__header'>
      <section className='fourth__header__top'>
        <div>
          <div>
            <h3>high quality video, audio & live classes</h3>
            <img src={crownQuote} alt='' />
          </div>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <button className='btn btn__blue'>View Courses</button>
      </section>
      <section className='fourth__header__bottom'>
        <div>
          {classes
            .slice(0, 2)
            .map((item: ClassImage, index: number): ReactElement => {
              return (
                <button key={index}>
                  <img src={item.name} alt='' />
                  <p>{item.text}</p>
                </button>
              )
            })}
        </div>
        <div>
          {classes
            .slice(2)
            .map((item: ClassImage, index: number): ReactElement => {
              return (
                <button key={index}>
                  <img src={item.name} alt='' />
                  <p>{item.text}</p>
                </button>
              )
            })}
        </div>
      </section>
    </header>
  )
  const second: ReactElement = (
    <footer>
      <img
        className='absolute top-[-7.67%] left-[43.01%] z-10'
        src={study}
        alt=''
      />
      <div className='bg-white rounded-lg w-[13.77%] h-[81px] left-[47.1%] absolute top-[26.97%] flex justify-center items-center z-20'>
        <div className='w-[76.59%] h-[64.86px] flex flex-col items-center gap-1'>
          <p className='font-satoshi font-bold text-xs text-center capitalize text-[#000f24]'>
            255K+ Enrolled Students
          </p>
          <img className='h-[44.86px]' src={people} alt='' />
        </div>
      </div>
      <img
        className='absolute top-[-9.06%] left-[83.06%]'
        src={bgAbout}
        alt=''
      />
    </footer>
  )
  const content: ReactElement = (
    <article className='fourth'>
      <div className='fourth__content'>
        {first}
        {second}
      </div>
    </article>
  )
  return content
}

export default Fourth
