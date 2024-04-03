import React from 'react'
import { CircleProps } from '~/types/interface'

const Circle = ({sizeBig,sizeSmall}:CircleProps) => {
  return (
    <div className={` rounded-full bg-[#BDCCFF] flex justify-center items-center`} style={{width:sizeBig,height:sizeBig}}>
        <div className={` rounded-full bg-[#506CFF]`} style={{width:sizeSmall,height:sizeSmall}}></div>
    </div>
  )
}

export default Circle