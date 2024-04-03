import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import flowerSketch from "../assets/flower-sketch.png"
import flower from "../assets/flower.png"
import asaCoin from "../assets/AISA coin.svg"
const CardNFT = () => {
  return (
    <div className='rounded-[20px] border-[#FFCD72] border-[1px] bg-white overflow-hidden'>
        <div className="p-[10px]">
            <ReactCompareSlider
                itemOne={
                    <ReactCompareSliderImage src={flowerSketch} alt='flower-sketch'/>
                }
                itemTwo={
                    <ReactCompareSliderImage src={flower} alt='flower'/>
                }
                style={{
                    width:"300px",
                    height:"300px",
                    borderRadius:"10px",
                    border:"1px solid #FFCD72",
                    marginBottom:"10px"
                }}
            />
            <div className='mb-[8px] text-[14px] leading-[15.4px] font-medium text-[#8B795F]'>0x94b0...620d</div>
            <div className='font-bold text-[#5A4F3E] leading-[17.6px]'>ASA Robot #123</div>
        </div>
        <div className='px-[10px] pt-[8px] pb-[12px] bg-[#FFF1CE]'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-x-[3px]'>
                    <img src={asaCoin} alt="aisa coin" className='w-[28px]'/>
                    <span className='text-[14px] leading-[15.4px] font-medium text-[#8B795F]'>Price</span>
                </div>
                <div className='flex items-center gap-x-[6px]'>
                    <span className='text-[14px] font-medium leading-[15.4px] text-[#8B795F]'>($1,168.23)</span>
                    <span className='font-bold text-[#506CFF] leading-[17.6px]'>1.99 ETH</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardNFT