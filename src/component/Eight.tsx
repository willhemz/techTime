import { ReactElement } from 'react'
import { images, ImageType } from './data'

const Eight = (): ReactElement => {
  const { techstars }: ImageType = images

  const first: ReactElement = (
    <section className='flex flex-col items-center gap-2 w-[72%] h-[168px] mb-4'>
      <p className='font-satoshi font-[500] text-base leading-[22px] tracking-widest uppercase text-white'>
        join our community
      </p>
      <h3 className='font-clash font-bold text-[56px] leading-[69px] text-center capitalize text-white'>
        Are you ready to connect with the future talent of the tech world
      </h3>
    </section>
  )

  const second: ReactElement = (
    <p className='mb-8 font-satoshi font-[500] text-base leading-[22px] text-center capitalize text-white'>
      Meet up with other tehcstars and grow together
    </p>
  )
  const third: ReactElement = (
    <section className='mb-10'>
      <img src={techstars} alt='techstars' />
    </section>
  )

  const fourth: ReactElement = (
    <button className='btn btn__white btn__white--large'>
      join our community
    </button>
  )

  const content: ReactElement = (
    <article className='eight'>
      {first}
      {second}
      {third}
      {fourth}
    </article>
  )

  return content
}

export default Eight
