import { ReactElement } from 'react'
import Button from './Button'
import { data, faq } from './data'

const Ninth = (): ReactElement => {
  const first: ReactElement = (
    <section className='w-[81.07%] lg:w-[46.8%] h-[81.13px] lg:h-[133px] flex flex-col justify-center items-center gap-[3.13px] lg:gap-2'>
      <h3 className='font-clash font-bold text-2xl leading-[30px] lg:text-4xl xl:text-[56px] xl:leading-[69px] capitalize text-center text-[#000f24]'>
        Frequently asked questions
      </h3>
      <p className='font-satoshi font-[500] text-[8px] leading-4 lg:text-base lg:leading-7 capitalize text-[#a2a2a2] mx-[28.25px] lg:mx-[33px] text-center'>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
    </section>
  )

  const second: ReactElement = (
    <section className='flex flex-col items-end lg:items-center gap-6 lg:gap-8 w-[92.05%] lg:w-[60%]'>
      {data.map((item, index) => {
        return <Button key={index} {...item} />
      })}
    </section>
  )

  const third: ReactElement = (
    <img
      className='absolute right-[-8%] top-[4.85%] lg:top-[-31px] lg:right-0 -z-10'
      src={faq}
      alt=''
    />
  )

  const content: ReactElement = (
    <article className='ninth'>
      {first}
      {second}
      {third}
    </article>
  )

  return content
}

export default Ninth
