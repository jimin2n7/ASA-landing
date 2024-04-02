import React from 'react'
import metamask from "../../../assets/MetaMask-Logo 1.svg"
import ton from "../../../assets/ton-full-toncoin-logo 1.svg"
import stable from "../../../assets/6e4b63a9ec7307d7a7f8fbac63ab6648 1.svg"
const MainSupport = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-[25px] z-10'>
        <h3 className='font-medium text-[24px] leading-[24px] text-[#5A4F3E]'>Powered By Amazing Technology</h3>
        <div className='flex items-center gap-x-[24px]'>
            <img src={metamask}alt="" />
            <img src={ton}alt="" />
            <img src={stable}alt="" />
        </div>
    </div>
  )
}

export default MainSupport