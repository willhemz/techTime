import { ReactElement } from 'react'
import { ArtType, images, ImageType } from './data'

const Fifth = (): ReactElement => {
  const { learning, art, bgContext }: ImageType = images
  const first: ReactElement = (
    <header className='flex flex-col items-start gap-[32px] h-full basis-[55%]'>
      <section className='flex flex-col items-start gap-4 '>
        <h3 className='font-clash font-bold text-[56px] leading-[70px] capitalize text-[000f24]'>
          This is why we are best from others
        </h3>
        <p className='w-[87.03%] font-satoshi font-semibold text-base leading-[28px] text-[#a2a2a2] capitalize'>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </section>
      <section>
        <img src={learning} alt='' />
      </section>
    </header>
  )
  const second: ReactElement = (
    <footer className='h-[628px] basis-[45%] flex flex-col items-center gap-6'>
      <div className='flex items-start gap-6'>
        {art.slice(0, 2).map((item: ArtType, index: number): ReactElement => {
          return (
            <section
              className='bg-white rounded-lg flex gap-6 flex-col items-start py-8 px-6 h-[302px]'
              key={index}>
              <img src={item.name} alt='' />
              <div className='flex flex-col items-start gap-1'>
                <h5 className='font-satoshi font-bold text-base leading-[22px] capitalize #000'>
                  {item.title}
                </h5>
                <p className='font-satoshi font-semibold text-xs leading-7 capitalize text-[#a2a2a2]'>
                  {item.text}
                </p>
              </div>
            </section>
          )
        })}
      </div>
      <div className='flex items-start gap-6'>
        {art.slice(2).map((item: ArtType, index: number): ReactElement => {
          return (
            <section
              className='bg-white rounded-lg flex gap-6 flex-col items-start py-8 px-6 h-[302px]'
              key={index}>
              <img src={item.name} alt='' />
              <div className='flex flex-col items-start gap-1'>
                <h5 className='font-satoshi font-bold text-base leading-[22px] capitalize #000'>
                  {item.title}
                </h5>
                <p className='font-satoshi font-semibold text-xs leading-7 capitalize text-[#a2a2a2]'>
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
    <article className='fifth'>
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
