import { ReactElement } from 'react'
import { images, ImageType } from './data'

const Second = (): ReactElement => {
  const { people, hero, arrow, wire, greeny, yello, arrInvert }: ImageType =
    images
  const content: ReactElement = (
    <article id='home' className='second'>
      <div className='second__content'>
        <header className='second__content__header'>
          <section className='flex flex-col items-center justify-center gap-[17.87px] lg:items-start lg:gap-8 w-full'>
            <div className='flex flex-col justify-center items-center lg:items-start gap-[8.93px] lg:gap-4'>
              <h3 className='font-clash font-bold text-[32px] md:text-[44px] lg:text-[64px] leading-[46px] lg:leading-[82px] capitalize text-center lg:text-left'>
                Grow your skills to advance your career path
              </h3>
              <p className='font-satoshi font-[500] text-[8px] leading-[15px] md:text-base md:leading-[26px] capitalize text-bluFaded w-[72%] text-center lg:text-left'>
                Build your future with our quality education. The best and
                largest all-in-one online tutoring platform in the world
              </p>
            </div>
            <div className='flex items-center gap-[13.4px] lg:gap-6'>
              <button className='btn btn__transparent'>
                Get Started Now 🡭
              </button>
              <button className='btn btn__white'>Enroll Now</button>
            </div>
          </section>
          <section className='flex gap-1 lg:gap-2 items-center'>
            <img
              className='w-[121px] lg:w-auto h-[32px] lg:h-auto'
              src={people}
              alt='people'
            />
            <div className='flex flex-col items-center'>
              <span className='font-clash font-bold text-base leading-[20px] lg:text-2xl lg:leading-[32px]'>
                255k+
              </span>
              <span className='font-satoshi text-[8px] lg:text-base'>
                Previews
              </span>
            </div>
          </section>
        </header>
        <footer className='w-full lg:w-[50%] h-[456px] lg:h-full'>
          <img
            className='absolute top-[344px] left-[16px] sm:left-[70px] w-[92.5%] sm:w-[80.1%] h-[456px] lg:w-[44.44%] lg:h-[886px] lg:left-[48.28%] lg:top-[43px]'
            src={hero}
            alt=''
          />
        </footer>
        <aside>
          <img
            className='absolute hidden lg:block left-[42%] top-[60.42%]'
            src={arrow}
            alt=''
          />
          <img
            className='absolute left-[-3.74%] lg:left-0 top-[39.02%] lg:top-[49%]'
            src={wire}
            alt=''
          />

          <img
            className='absolute hidden lg:block left-[8.8%] top-[10.54%] xl:top-[12.54%]'
            src={greeny}
            alt=''
          />

          <img
            className='absolute left-[45.66%] top-[14.24%]'
            src={yello}
            alt=''
          />

          <img
            className='absolute lg:hidden left-[76.41%] top-[30.15%]'
            src={arrInvert}
            alt=''
          />
        </aside>
      </div>
    </article>
  )
  return content
}

export default Second
