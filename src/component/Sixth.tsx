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
    <header className='flex flex-col justify-center items-center gap-1 lg:gap-[8px] w-full md:w-[55.6%]'>
      <h3 className='font-clash font-bold text-2xl leading-[30px] lg:text-[56px] lg:leading-[69px] capitalize text-[#000f24] text-center '>
        Browse our popular courses
      </h3>
      <p className='font-satoshi font-[500] text-[8px] leading-4 lg:text-base lg:leading-7 text-center capitalize text-[#a2a2a2] w-[75%] lg:w-[89.8%]'>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
    </header>
  )
  const second: ReactElement = (
    <nav className='flex justify-between w-[78.59%] xs:w-[55%] 2xl:w-[55%] items-start lg:items-end gap-4 lg:w-[62%] xl:gap-[12.05%]'>
      {categories.map((item: string, index: number): ReactElement => {
        return (
          <button
            className={`font-satoshi font-bold text-[8px] leading-[11px] lg:text-base lg:leading-[22px] capitalize py-1 px-2 lg:py-3 lg:px-4 rounded ${
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
    <footer className='flex flex-wrap gap-x-[1.61%] gap-y-2 lg:gap-y-6 items-center justify-center xxs:justify-start w-full '>
      {data.map((item, index) => {
        return (
          <article
            className='w-[194px] flex flex-col item-start gap-4 lg:w-[32.25%] bg-white rounded lg:rounded-2xl lg:h-[576px] px-2 py-4 lg:p-5'
            key={index}>
            <section className='flex flex-col items-start gap-4 lg:gap-[24px] w-full h-full'>
              <div className='flex flex-col items-start gap-2 lg:gap-4 w-full'>
                <img
                  src={item.image}
                  className='object-cover w-full h-[117px] lg:h-auto'
                  alt=''
                />
                <div className='flex w-full justify-between items-center'>
                  <p className='py-[2px] lg:py-1 px-2 lg:px-5 bg-[rgba(30,93,206,0.2)] rounded-[6.4444px] lg:rounded-2xl font-satoshi font-bold text-[4px] leading-[5px] lg:text-xs lg:leading-4 capitalize text-[#1e5dce] h-[9px] lg:h-[24px]'>
                    {item.category}
                  </p>
                  <div className='flex items-center lg:items-start gap-[3.22px] lg:gap-[8.5%] '>
                    <p className='flex items-center  text-xs'>
                      <span className='font-satoshi font-bold text-[4px] leading-[5px] lg:text-xs lg:leading-4 capitalize text-[#a1a1a1]'>
                        {item.rating}
                      </span>{' '}
                      <span className='text-[4px] leading-[5px] lg:text-xs'>
                        ⭐
                      </span>
                    </p>
                    <p className='font-satoshi font-bold text-[4px] leading-[5px] lg:text-xs lg:leading-4 capitalize text-[#a1a1a1]'>
                      ({item.members})
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start gap-1 lg:gap-[16px]'>
                <h3 className='w-[89%] font-clash font-semibold text-[8px] leading-[10px] lg:text-2xl lg:leading-[30px] capitalize text-[#000f24]'>
                  {item.title}
                </h3>
                <div className='flex w-full justify-between items-center font-satoshi font-[500] text-[4px] leading-[5px] lg:text-base lg:leading-[22px] capitalize text-[#a1a1a1]'>
                  <div className='flex gap-1 lg:gap-2 items-center'>
                    <img
                      className='w-2 h-2 lg:w-auto lg:h-auto'
                      src={schedule}
                      alt=''
                    />
                    <p>{item.duration}</p>
                  </div>
                  <div className='flex gap-1 lg:gap-2 items-center'>
                    <img
                      className='w-2 h-2 lg:w-auto lg:h-auto'
                      src={menu_book}
                      alt=''
                    />
                    <p>{item.lessons} Lessons</p>
                  </div>
                </div>
              </div>
            </section>
            <section className='flex justify-between items-center'>
              <div className='flex items-center gap-[3.22px] lg:gap-2'>
                <img
                  className='w-4 h-4 lg:w-auto lg:h-auto'
                  src={item.avatar}
                  alt={item.tutor}
                />
                <p className='font-satoshi font-bold text-[6px] leading-[8px] lg:text-base lg:leading-[22px] capitalize text-black'>
                  {item.tutor}
                </p>
              </div>
              <p className='font-clash font-semibold text-[8px] lg:text-xl leading-[10px] lg:leading-[25px] capitalize text-blu'>
                {item.price}
              </p>
            </section>
          </article>
        )
      })}
    </footer>
  )

  const fourth: ReactElement = (
    <button className='btn btn__blue w-auto md:w-auto md:btn__blue--large'>
      <span className='hidden md:block'>Explore All courses</span>
      <span className='md:hidden'>view courses</span>
    </button>
  )

  const fifth: ReactElement = (
    <img
      className='left-[1.87%] top-[0.77%] w-[16.45px] h-[18.31px] md:w-auto md:h-auto md:left-[9.49%] md:top-[12.2%] absolute'
      src={bgMod}
      alt=''
    />
  )

  const content: ReactElement = (
    <article id='courses' className='sixth'>
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
