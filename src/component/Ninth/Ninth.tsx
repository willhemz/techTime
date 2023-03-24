import { ReactElement } from 'react'
import Button from './Button'
import { data } from './data'

const Ninth = (): ReactElement => {
  const first: ReactElement = (
    <section className='w-[46.8%] h-[133px] flex flex-col justify-center items-center gap-2'>
      <h3 className='font-clash font-bold text-[56px] leading-[69px] capitalize text-[#000f24]'>
        Frequently asked questions
      </h3>
      <p className='font-satoshi font-[500] text-base leading-7 capitalize text-[#a2a2a2] w-[91.8%] text-center'>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
    </section>
  )

  const second: ReactElement = (
    <section className='flex flex-col items-center gap-8 w-[60%]'>
      {data.map((item, index) => {
        return <Button key={index} {...item} />
      })}
    </section>
  )

  const content: ReactElement = (
    <article className='ninth'>
      {first}
      {second}
    </article>
  )

  return content
}

export default Ninth
