import React from 'react'
import { ButtonProps } from '~/types/interface'

const Button = ({children,className}:ButtonProps) => {
  return (
    <button className={`px-[24px] py-[12px] rounded-full shadow-[0_2px_4px_0_#00000026] ${className ? className :""}`}>{children}</button>
  )
}

export default Button