import React from 'react'
import { LayoutProps } from '~/types/interface'

const Layout = ({children}:LayoutProps) => {
  return (
    <div className='max-w-[1380px] mx-auto'>{children}</div>
  )
}

export default Layout