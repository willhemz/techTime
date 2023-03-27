import React, { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { CgPushChevronUpO } from 'react-icons/cg'

export default function MbScrollToTopBtn(): ReactElement {
  // show text on hover
  const [showBTT, setShowBTT] = useState<boolean>(false)
  const handleMouseOver = (): void => {
    setShowBTT(true)
  }
  const handleMouseOut = (): void => {
    setShowBTT(false)
  }

  // add scroll to top feature
  const [displayArrow, setDisplayArrow] = useState<boolean>(false)

  const scrollUp = (): void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const listenToScroll = (): void => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setDisplayArrow(true)
    } else {
      setDisplayArrow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return (): void => window.removeEventListener('scroll', listenToScroll)
  }, [])

  return (
    <div>
      {displayArrow && (
        <div
          className='flex gap-4 items-center p-4 fixed bottom-[40px] right-[5px] bg-blu border-primaryDeep rounded-lg cursor-pointer'
          onClick={scrollUp}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
          <div className='text-white'>
            <CgPushChevronUpO />
          </div>
          <div
            className={`text-white bg-blu ${
              showBTT ? 'hidden md:block' : 'hidden'
            }`}>
            Back to Top
          </div>
        </div>
      )}
    </div>
  )
}
