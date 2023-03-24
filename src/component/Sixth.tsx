import { ReactElement, useState } from 'react'
import { images, ImageType, Programs } from './data'

const Sixth = (): ReactElement => {
  const { programs, categories, schedule, menu_book, bgMod }: ImageType = images

  const [data, setData] = useState<Programs>(programs)

  const [bgValue, setBgValue] = useState<string>('All Categories')

  const handleClick = (val: string): void => {
    let newData: Programs = []
    if (val === 'All Categories') newData = programs
    else newData = programs.filter((item) => item.category === val)
    setData(newData)
    setBgValue(val)
  }

  const first: ReactElement = (
    <header className='flex flex-col justify-center items-center gap-[8px] w-[55.6%]'>
      <h3 className='font-clash font-bold text-[56px] leading-[69px] capitalize text-[#000f24]'>
        Browse our popular courses
      </h3>
      <p className='font-satoshi font-[500] text-base leading-7 text-center capitalize text-[#a2a2a2] w-[89.8%]'>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
    </header>
  )
  const second: ReactElement = (
    <nav className='flex justify-between w-[50%] items-end gap-[12.05%]'>
      {categories.map((item: string, index: number): ReactElement => {
        return (
          <button
            className={`font-satoshi font-bold text-base leading-[22px] capitalize py-3 px-4 rounded ${
              bgValue === item ? 'bg-white text-blu' : 'text-[#a1a1a1]'
            }`}
            onClick={(): void => handleClick(item)}
            key={index}>
            {item}
          </button>
        )
      })}
    </nav>
  )
  const third: ReactElement = (
    <footer className='flex flex-wrap gap-x-[1.61%] gap-y-6 items-center w-full '>
      {data.map((item, index) => {
        return (
          <article
            className='w-[32.25%] bg-white rounded-2xl h-[576px] p-5'
            key={index}>
            <section className='flex flex-col items-start gap-[24px]'>
              <div className='flex flex-col gap-4'>
                <img src={item.image} className='object-cover w-full' alt='' />
                <div className='flex justify-between items-center'>
                  <p className='py-1 px-5 bg-[rgba(30,93,206,0.2)] rounded-2xl font-satoshi font-bold text-xs capitalize text-[#1e5dce] h-[24px]'>
                    {item.category}
                  </p>
                  <div className='flex items-start gap-[8.5%] basis-[25%]'>
                    <p className='flex basis-[42.55%] text-xs'>
                      <span className='font-satoshi font-bold text-xs capitalize text-[#a1a1a1]'>
                        {item.rating}
                      </span>{' '}
                      ⭐
                    </p>
                    <p className='font-satoshi font-bold text-xs capitalize text-[#a1a1a1]'>
                      ({item.members})
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start gap-[16px]'>
                <h3 className='w-[89%] font-clash font-semibold text-2xl leading-[30px] capitalize text-[#000f24]'>
                  {item.title}
                </h3>
                <div className='flex w-full justify-between font-satoshi font-[500] text-base leading-[22px] capitalize text-[#a1a1a1]'>
                  <div className='flex gap-2'>
                    <img src={schedule} alt='' />
                    <p>{item.duration}</p>
                  </div>
                  <div className='flex gap-2'>
                    <img src={menu_book} alt='' />
                    <p>{item.lessons} Lessons</p>
                  </div>
                </div>
              </div>
            </section>
            <section className='flex justify-between items-center mt-5'>
              <div className='flex items-center gap-2'>
                <img src={item.avatar} alt={item.tutor} />
                <p className='font-satoshi font-bold text-base leading-[22px] capitalize text-black'>
                  {item.tutor}
                </p>
              </div>
              <p className='font-clash font-semibold text-xl leading-[25px] capitalize text-blu'>
                {item.price}
              </p>
            </section>
          </article>
        )
      })}
    </footer>
  )

  const fourth: ReactElement = (
    <button className='btn btn__blue btn__blue--large'>
      Explore All courses
    </button>
  )

  const fifth: ReactElement = (
    <img className='left-[9.49%] top-[12.2%] absolute' src={bgMod} alt='' />
  )

  const content: ReactElement = (
    <article className='sixth'>
      <div className='sixth__content'>
        {first}
        {second}
        {third}
        {fourth}
        {fifth}
      </div>
    </article>
  )
  return content
}

export default Sixth
