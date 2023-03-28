import { ReactElement, useCallback, useEffect, useRef } from 'react'
import Comment from './Comment'
import { data, PropsType } from './data'

const Seventh = (): ReactElement => {
  const containerRef = useRef<HTMLElement>(null!)

  const newNodes = useCallback((): void => {
    const nodeItems: NodeListOf<ChildNode> = containerRef.current.childNodes
    nodeItems.forEach((item) => {
      let clone: Node = item.cloneNode(true)
      containerRef.current.appendChild(clone)
    })
  }, [])

  useEffect(() => {
    newNodes()
  }, [])

  const handlePos = useCallback((val: string): void => {
    const value: number = 10
    let pos: number = containerRef.current.getBoundingClientRect().left
    if (val === 'reverse') {
      pos += value
      containerRef.current.style.left = `${pos}px`
    }
    if (val === 'promote') {
      pos -= value
      containerRef.current.style.left = `${pos}px`
    }
  }, [])

  const rolls = Array.from(new Array(data.length).keys())
  const first: ReactElement = (
    <section className='flex flex-col justify-center items-center gap-[3.1px] xl:gap-2 w-[80.37%] lg:w-[46.41%] xl:w-[80%]'>
      <h3 className='font-clash font-bold text-2xl leading-[30px] xl:text-[56px] xl:leading-[69px] capitalize text-center text-[#000f24]'>
        What our clients are saying
      </h3>
      <p className='font-satoshi font-[500] text-[8px] leading-4 xl:text-base xl:leading-7 text-center capitalize text-[#a2a2a2] mx-7 xl:mx-44 2xl:w-[46.41%]'>
        high-defination video is video of higher resolution and quality than
        standard definition. while there’s no standard meaning for high
        definition, generally any standard video image
      </p>
    </section>
  )

  const second: ReactElement = (
    <section className='w-full h-[225.96px] xl:h-[346px] flex flex-col justify-end items-center relative'>
      <header
        ref={containerRef}
        className='flex items-start gap-4 xl:gap-6 w-auto  xl:w-[2484px] h-[201.96px] xl:h-[296px] absolute top-0 left-[-50%]'>
        {data.map((item: PropsType, index: number): ReactElement => {
          return <Comment key={index.toString()} {...item} />
        })}
      </header>
      <footer className='flex items-start justify-center gap-1 xl:gap-2 h-[10px] w-full'>
        {rolls.map((item, index) => {
          return (
            <div
              className={`w-2 h-2 xl:w-[10px] xl:h-[10px] rounded-xl ${
                index === 1 ? 'bg-blu' : 'bg-[#ccdbf0]'
              } `}
              key={item}></div>
          )
        })}
      </footer>
      <aside className='absolute top-0 left-0 w-full h-full flex items-center'>
        <div className='w-full flex justify-between mx-3'>
          <button
            onClick={(): void => {
              if (containerRef.current.getBoundingClientRect().left < 0)
                handlePos('reverse')
            }}
            className='shadow-2xl shadow-slate-500 bg-slate-900 text-lg md:text-3xl lg:text-5xl px-2 lg:px-4 py-1 lg:py-2 rounded-lg text-white animate-resize'>
            &larr;
          </button>
          <button
            onClick={() => handlePos('promote')}
            className='shadow-2xl shadow-slate-500 bg-slate-900 text-lg md:text-3xl lg:text-5xl px-2 lg:px-4 py-1 lg:py-2 rounded-lg text-white animate-resize'>
            &rarr;
          </button>
        </div>
      </aside>
    </section>
  )

  const content: ReactElement = (
    <article id='testimonial' className='seventh'>
      {first}
      {second}
    </article>
  )

  return content
}

export default Seventh
