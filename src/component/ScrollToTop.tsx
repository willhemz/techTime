import React, { ReactElement, useEffect } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
}
const ScrollToTop = (props: Props): ReactElement => {
  const { children } = props
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <>{children}</>
}

export default ScrollToTop
