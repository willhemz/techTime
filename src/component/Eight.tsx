import { ReactElement } from 'react'
import { images, ImageType } from './data'

const Eight = (): ReactElement => {
  const { techstars }: ImageType = images

  const first: ReactElement = (
    <section className='flex flex-col items-center gap-1 lg:gap-2 w-[78.5%] lg:w-[72%] h-[120px] lg:h-[168px] mb-6 lg:mb-8'>
      <p className='font-satoshi font-[500] text-[8px] leading-[11px] lg:text-base lg:leading-[22px] tracking-widest uppercase text-white'>
        join our community
      </p>
      <h3 className='font-clash font-bold text-2xl leading-[30px] lg:text-[56px] lg:leading-[69px] text-center capitalize text-white'>
        Are you ready to connect with the future talent of the tech world
      </h3>
      <p className='mb-8 font-satoshi font-[500] text-[8px] leading-[11px] lg:text-base lg:leading-[22px] text-center capitalize text-white'>
        Meet up with other tehcstars and grow together
      </p>
    </section>
  )

  const third: ReactElement = (
    <section className='mb-6 lg:mb-10'>
      <img
        className='w-[391.73px] h-[181px] lg:w-[983px] lg:h-[454.2px]'
        src={techstars}
        alt='techstars'
      />
    </section>
  )

  const fourth: ReactElement = (
    <button className='btn btn__white w-auto md:btn__white--large'>
      join our community
    </button>
  )

  const content: ReactElement = (
    <article id='community' className='eight'>
      {first}
      {third}
      {fourth}
    </article>
  )

  return content
}

export default Eight
