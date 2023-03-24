import { ReactElement, useState } from 'react'
import { ObjType } from './data'

const Button = ({ title, text }: ObjType): ReactElement => {
  const [readMore, setReadMore] = useState<boolean>(false)

  const handleClick = (): void => setReadMore(!readMore)
  return (
    <div className='flex flex-col items-start gap-4 w-full'>
      <button
        className={`w-full flex justify-between items-center h-[32px] font-satoshi font-[900] text-2xl capitalize ${
          readMore ? 'text-blu' : 'text-[#000f24]'
        }`}
        onClick={handleClick}>
        <span>{title}</span>
        <span>{readMore ? '-' : '+'}</span>
      </button>
      {readMore && (
        <p className='font-satoshi font-[500] text-base leading-7 capitalize text-[#a2a2a2]'>
          {text}
        </p>
      )}
    </div>
  )
}

export default Button
