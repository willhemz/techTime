import { ReactElement } from 'react'
import { ClassImage, images, ImageType } from './data'

const Fourth = (): ReactElement => {
  const { classes, crownQuote, study, people, bgAbout, bgAbt }: ImageType =
    images
  const first: ReactElement = (
    <header className='fourth__header'>
      <section className='fourth__header__top'>
        <div>
          <div className='relative'>
            <h3>high quality video, audio & live classes</h3>
            <img
              className='w-9 h-6 lg:w-auto lg:h-auto'
              src={crownQuote}
              alt=''
            />
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
                  <img
                    className='w-[17.59px] h-[17.59px] lg:w-auto lg:h-auto'
                    src={item.name}
                    alt=''
                  />
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
                  <img
                    className='w-[17.59px] h-[17.59px] lg:w-auto lg:h-auto'
                    src={item.name}
                    alt=''
                  />
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
        className='absolute w-[352.88px] h-[272.66px] top-[354.41px] left-[4.516%] z-10 sm:left-[50%] sm:translate-x-[-50%] md:translate-x-0 md:top-[50%] md:translate-y-[-50%] lg:w-[500px] lg:h-auto lg:left-[45%] xl:w-[600px] 2xl:w-auto'
        src={study}
        alt=''
      />
      <div className='bg-white rounded-[3.51px] lg:rounded-lg w-[90px] h-[36px] lg:w-[13.86%] lg:h-auto absolute left-[10.75%] lg:left-[49%] top-[408.34px] lg:top-[45%] flex justify-center items-center z-20 sm:left-[40%] sm:translate-x-[-50%] md:translate-x-0 md:top-[40%] md:translate-y-[-50%] md:left-[55%]'>
        <div className='w-[84.67%] lg:w-[85%] h-[25.75px] lg:h-auto py-2 flex flex-col items-center gap-[1.75px] lg:gap-1'>
          <p className='font-satoshi font-bold text-[6px] leading-2 lg:text-[10px] xl:text-xs text-center capitalize text-[#000f24]'>
            255K+ Enrolled Students
          </p>
          <img
            className='w-[62px] h-4 lg:h-auto lg:w-[80%] '
            src={people}
            alt=''
          />
        </div>
      </div>
      <img
        className='hidden lg:block absolute top-[-9.06%] left-[83.06%] xl:left-[80%] xl:top-[54px]'
        src={bgAbout}
        alt=''
      />
      <img
        className='lg:hidden absolute top-[205.55px] left-[72.43%]'
        src={bgAbt}
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
