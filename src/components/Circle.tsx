import React from 'react'
import { CircleProps } from '~/types/interface'

const Circle = ({sizeBig,sizeSmall}:CircleProps) => {
  return (
    <div className={`w-[${sizeBig}px] h-[${sizeBig}px] rounded-full bg-[#BDCCFF] flex justify-center items-center`}>
        <div className={`w-[${sizeSmall}px] h-[${sizeSmall}px] rounded-full bg-[#506CFF]`}></div>
    </div>
  )
}

export default Circle