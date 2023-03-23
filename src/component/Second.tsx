import { ReactElement } from 'react'
import { images, ImageType } from './data'

const Second = (): ReactElement => {
  const { people, hero, arrow, wire, greeny, yello }: ImageType = images
  const content: ReactElement = (
    <article className='second'>
      <div className='second__content'>
        <header className='second__content__header'>
          <section className='flex flex-col items-start gap-8'>
            <div className='flex flex-col items-start gap-4'>
              <h3 className='font-clash font-bold text-[64px] leading-[82px] capitalize'>
                Grow your skills to advance your career path
              </h3>
              <p className='font-satoshi font-semibold text-base leading-[26px] capitalize text-bluFaded w-[72%]'>
                Build your future with our quality education. The best and
                largest all-in-one online tutoring platform in the world
              </p>
            </div>
            <div className='flex items-center gap-6'>
              <button className='btn btn__transparent'>
                Get Started Now 🡭
              </button>
              <button className='btn btn__white'>Enroll Now</button>
            </div>
          </section>
          <section className='flex gap-2 items-center'>
            <img src={people} alt='people' />
            <div className='flex flex-col items-center'>
              <span className='font-clash font-bold text-2xl'>255k+</span>
              <span className='font-satoshi'>Previews</span>
            </div>
          </section>
        </header>
        <footer className='w-[50%] h-[95.8%]'>
          <img className='w-full h-full' src={hero} alt='' />
        </footer>
        <aside>
          <img
            className='absolute left-[42.6%] top-[56.4%]'
            src={arrow}
            alt=''
          />
          <img className='absolute left-[-8%] top-[50%]' src={wire} alt='' />

          <img
            className='absolute left-[1.86%] top-[12.54%]'
            src={greeny}
            alt=''
          />

          <img
            className='absolute left-[45.66%] top-[14.24%]'
            src={yello}
            alt=''
          />
        </aside>
      </div>
    </article>
  )
  return content
}

export default Second
