import React from 'react'
import Layout from '~/components/Layout'
import system from "../../../../assets/dvd@2x 1 (1) 1.png"
import iconHug from "../../../../assets/AISA coin huge.svg"
import pencilSys from "../../../../assets/penSystem.svg"
import { arraySystem } from '~/dummyData/system'
const MainSystem = () => {
  return (
    <div className='pb-[191px]'>
        <Layout>
            <div>
                <h1 className='font-bold text-[40px] leading-[40px] text-[#5A4F3E] text-center'>$AISA System</h1>
                <div className='relative h-[620px]'>
                    <div className='absolute top-0 right-[50%] translate-x-1/2 w-fit h-full'>
                        <img src={system} alt="bg-system" className=''/>
                    </div>
                    <div className='absolute top-[150px] right-[50%] translate-x-1/2 w-fit h-full'>
                        <img src={iconHug} alt="icon aisa hug" className=''/>
                    </div>
                    {arraySystem.map((item,index:any)=>(
                        <div className={`absolute ${item.class}`} key={item.id}>
                            <div className='flex flex-col gap-4'>
                                <div className='w-[60px] h-[60px] flex justify-center items-center border-[2px] border-[#F19F00] rounded-full'>
                                    <img src={item.img} alt={item.title}/>
                                </div>
                                <h1 className='text-[24px] font-bold text-[#F19F00] leading-[26.4px]'>{item.title}</h1>
                                <p className="desc_side text-[#8B795F] leading-[22.4px] font-medium relative pl-[20px] ">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default MainSystem