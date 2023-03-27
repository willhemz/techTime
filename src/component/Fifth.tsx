import { ReactElement } from 'react'
import { ArtType, images, ImageType } from './data'

const Fifth = (): ReactElement => {
  const { learning, art, bgContext }: ImageType = images
  const first: ReactElement = (
    <header className='flex flex-col items-center lg:items-start gap-6 lg:gap-[32px] w-full lg:basis-[55%]'>
      <section className='flex flex-col items-center justify-center lg:items-start gap-2 lg:gap-4'>
        <h3 className='font-clash font-bold text-2xl lg:text-[56px] leading-[36px] lg:leading-[70px] capitalize text-center lg:text-left text-[000f24]'>
          This is why we are best from others
        </h3>
        <p className='w-[85%] lg:w-[87.03%] font-satoshi font-[500] text-[8px] leading-4 lg:text-base lg:leading-[28px] text-center lg:text-left text-[#a2a2a2] capitalize'>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </section>
      <section>
        <img className='w-full rounded-lg object-cover' src={learning} alt='' />
      </section>
    </header>
  )
  const second: ReactElement = (
    <footer className='w-full lg:basis-[45%] flex flex-col items-start lg:items-center gap-2 lg:gap-6'>
      <div className='flex items-start gap-2 lg:gap-6 h-[189px] lg:h-[302px]'>
        {art.slice(0, 2).map((item: ArtType, index: number): ReactElement => {
          return (
            <section
              className='bg-white rounded lg:rounded-lg flex gap-6 flex-col items-start py-6 xl:py-8 px-4 xl:px-6 h-[189px] lg:h-[302px]'
              key={index}>
              <img
                className='w-8 h-8 xl:w-auto xl:h-auto'
                src={item.name}
                alt=''
              />
              <div className='flex flex-col items-start gap-1'>
                <h5 className='font-satoshi font-bold text-xs lg:text-base lg:leading-[22px] capitalize #000'>
                  {item.title}
                </h5>
                <p className='font-satoshi font-[500] text-[8px] lg:text-[10px] leading-4 2xl:text-xs lg:leading-5 2xl:leading-7 capitalize text-[#a2a2a2] h-full'>
                  {item.text}
                </p>
              </div>
            </section>
          )
        })}
      </div>

      <div className='flex items-start gap-2 lg:gap-6 h-[189px] lg:h-[302px]'>
        {art.slice(0, 2).map((item: ArtType, index: number): ReactElement => {
          return (
            <section
              className='bg-white rounded lg:rounded-lg flex gap-6 flex-col items-start py-6 xl:py-8 px-4 xl:px-6 h-[189px] lg:h-[302px]'
              key={index}>
              <img
                className='w-8 h-8 xl:w-auto xl:h-auto'
                src={item.name}
                alt=''
              />
              <div className='flex flex-col items-start gap-1'>
                <h5 className='font-satoshi font-bold text-xs lg:text-base lg:leading-[22px] capitalize #000'>
                  {item.title}
                </h5>
                <p className='font-satoshi font-[500] text-[8px] lg:text-[10px] leading-4 2xl:text-xs lg:leading-5 2xl:leading-7 capitalize text-[#a2a2a2] h-full'>
                  {item.text}
                </p>
              </div>
            </section>
          )
        })}
      </div>
    </footer>
  )

  const content: ReactElement = (
    <article id='about-us' className='fifth'>
      <div className='fifth__content'>
        {first}
        {second}
      </div>
      <img className='absolute left-[30px] top-[41px]' src={bgContext} alt='' />
    </article>
  )

  return content
}

export default Fifth
