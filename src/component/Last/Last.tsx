import { ReactElement } from 'react'
import { logos, LogoType, linksArray, LinksObj } from './data'

type ItemProp = { [index: string]: string }

const Last = (): ReactElement => {
  const first: ReactElement = (
    <section className='flex flex-col items-start gap-6 h-[173px] w-[18.88%]'>
      <div className='flex flex-col items-start gap-[26px]'>
        <p className='header__content__logo'>TechTime</p>
        <p className='font-satoshi text-base leading-[22px] capitalize text-white'>
          reach out to us on any of our social media networks
        </p>
      </div>
      <div className='flex justify-between items-center gap-[18.5%] w-full'>
        {logos.map((item: LogoType, index: number): ReactElement => {
          return (
            <a
              className='text-[32px] text-[#2a2a2b]'
              key={index}
              href={item.link}>
              {item.name}
            </a>
          )
        })}
      </div>
    </section>
  )

  const second: ReactElement = (
    <>
      {linksArray.map(
        ({ name, links }: LinksObj, index: number): ReactElement => {
          return (
            <section
              className='flex flex-col items-start gap-[32px] h-[295px]'
              key={index}>
              <p className='font-clash font-semibold text-[32px] leading-[39px] capitalize text-white'>
                {name}
              </p>
              <div className='flex flex-col items-start gap-4'>
                {links.map((item: ItemProp, index: number): ReactElement => {
                  return (
                    <a
                      className='font-satoshi text-2xl capitalize text-white'
                      key={index}
                      href={item.title}>
                      {item.title}
                    </a>
                  )
                })}
              </div>
            </section>
          )
        }
      )}
    </>
  )

  const third: ReactElement = (
    <section className='flex flex-col items-start gap-[32px] w-[25.94%] h-[117px]'>
      <h5 className='font-clash font-semibold text-[32px] leading-[39px] capitalize text-white'>
        Subscribe us
      </h5>
      <form className='flex items-start w-full'>
        <label htmlFor='email' className='hidden'>
          email
        </label>
        <input
          className='bg-[#2a2a2b] border border-[#054fb3] rounded-l-[2px] placeholder-[#424141] text-white font-satoshi font-[500] text-sm leading-[19px] capitalize h-full basis-[70%] p-4'
          type='email'
          name='email'
          id='email'
          placeholder='Nft123@gmail.com'
        />
        <button className='bg-blu rounded-r-[2px] py-4 px-2 capitalize font-satoshi font-[500] text-[14px] leading-[19px] text-white basis-[30%]'>
          Send Message
        </button>
      </form>
    </section>
  )

  const content: ReactElement = (
    <article className='last'>
      <div className='last__content'>
        {first}
        {second}
        {third}
      </div>
    </article>
  )

  return content
}

export default Last
