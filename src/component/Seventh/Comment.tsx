import { ReactElement } from 'react'
import { PropsType } from './data'

const Comment = ({ img, name, position, content }: PropsType): ReactElement => {
  return (
    <div
      className={`w-[332px] xl:w-[603px] h-full bg-white rounded-2xl xl:rounded-3xl flex flex-col items-start py-6 px-4 gap-[10px]`}>
      <div className='flex flex-col items-start gap-4 xl:gap-5'>
        <header className='font-satoshi font-[500] text-[10px] leading-[14px] xl:text-sm xl:leading-[26px] capitalize text-[#a2a2a2]'>
          {content}
        </header>
        <footer className='flex items-center gap-[1.92px] xl:gap-2'>
          <img className='w-6 xl:w-auto' src={img} alt={name} />
          <div className='flex flex-col items-start gap-[0.96px] xl:gap-1'>
            <h5 className='font-satoshi font-bold text-[10px] leading-[14px] xl:text-sm xl:leading-[19px] capitalize text-black'>
              {name}
            </h5>
            <p className='font-satoshi text-[8px] leading-[11px] xl:text-xs xl:leading-4 capitalize text-[#a1a1a1]'>
              {position}
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Comment
