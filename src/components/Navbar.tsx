import React from 'react'
import logo from "../assets/logo ASA.svg"
import { Link } from 'react-router-dom'
import { arrayNavLink } from '~/dummyData/navbar'
import Layout from './Layout'
const Navbar = () => {
  return (
    <div className='py-[28px] bg-white shadow-[0_2px_4px_0_#0000001A]'>
        <Layout> 
            <div className='flex justify-between items-center '>
                <div className='flex items-center gap-x-[40px]'>
                    <img src={logo} alt="logo" />
                    <ul className='flex items-center gap-x-[40px]'>
                        {arrayNavLink.map((item,index:number)=>(
                            <li key={item.id} className='font-medium leading-[24px] text-[#8B795F]'>
                                <Link to={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-x-[18px]'>
                    <button className='px-[20px] py-[10px] bg-[#DFE6FF] text-[#506CFF] font-bold rounded-full shadow-[0_2px_4px_0_#00000026]'>Discord</button>
                    <button className='px-[20px] py-[10px] bg-[#506CFF] text-[#FFFFFF] font-bold rounded-full shadow-[0_2px_4px_0_#00000026]'>Connect</button>
                </div>
            </div>    
        </Layout>
    </div>
  )
}

export default Navbar