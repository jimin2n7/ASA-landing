import React from 'react'
import Button from '~/components/Button'
import Layout from '~/components/Layout'
import { arrayHowToWork } from '~/dummyData/howtowork'

const MainWork = () => {
  return (
    <div className='bg-work'>
        <Layout>
            <div className='mb-[40px]'>
                <div className='flex flex-col gap-y-[37px] items-center'>
                    <div className='flex flex-col gap-y-[10px]'>
                        <h1 className='font-bold text-[40px] leading-[40px] text-[#5A4F3E]'>How to ASA NFT Work</h1>
                        <p className='text-[#F19F00] font-semibold text-[24px] leading-[24px]'>Selling NFT Images on ASA Dapp</p>
                    </div>
                    <Button className='bg-transparent border-[#506CFF] border-[2px] text-[#506CFF] font-bold text-[18px] leading-[24px] w-fit'>Create Account</Button>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-[24px]'>
                {arrayHowToWork.map((item,index:number)=>(
                    <div key={item.id} className='py-[30px] px-[39px] bg-white rounded-2xl flex flex-col items-center'>
                        <img src={item.img} alt={item.title} className='mb-[13px]'/>
                        <div className='max-w-[200px] text-center flex flex-col gap-[8px]'>
                            <h3 className='font-bold text-[20px] leading-[22px] text-[#F19F00]'>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    </div>
  )
}

export default MainWork