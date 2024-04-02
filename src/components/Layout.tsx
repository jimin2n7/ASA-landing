import React from 'react'
import { LayoutProps } from '~/types/interface'

const Layout = ({children,classname}:LayoutProps) => {
  return (
    <div className={`max-w-[1380px] mx-auto ${classname}`}>{children}</div>
  )
}

export default Layout