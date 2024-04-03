import React from 'react'
import Layout from './Layout'
import FooterLogo from '../assets/logo ASA.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#5A4F3E] py-20'>
      <Layout>
        <div className='flex items-start justify-between w-full'>
          <div className='flex flex-col items-start'>
            <img src={FooterLogo} alt='FooterLogo' className='w-[180px] h-[84px]' />
            <div className='mt-[55px]'>
              <div className='text-[20px] leading-5 font-bold text-[#FFF1CE]'>Supercharge Your Inbox</div>
              <p className='mt-[10px] text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                Sign up for our developer newsletter.
              </p>

              <form action='#' className='mt-[16px] flex gap-x-3 flex-wrap'>
                <input
                  type='email'
                  name='email'
                  placeholder='Your email address'
                  className=' py-2 pl-5 w-[282px] border border-[#F19F00] outline-none rounded-[28px] bg-transparent text-[#F19F00] text-[14px] leading-[24px] placeholder-[#F19F00]'
                />
                <button className='outline-none py-2 px-5 bg-[#F19F00] text-white text-[14px] leading-6 font-bold rounded-[28px]' type='submit'>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className='flex items-start justify-between gap-x-[136px] flex-wrap'>
            <div>
              <div className=' font-bold text-[20px] leading-5 text-[#FFF1CE] mb-5'>ASA</div>
              <ul className='flex flex-col gap-y-5'>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/about'>About Us</Link>
                </li>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/road-map'>Roadmap</Link>
                </li>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/partners'>Partnerships</Link>
                </li>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/community'>Community</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className=' font-bold text-[20px] leading-5 text-[#FFF1CE] mb-5'>Marketplace</div>
              <ul className='flex flex-col gap-y-5'>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/earn'>Earn</Link>
                </li>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/token'>AISA Token</Link>
                </li>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/allocation'>AISA Allocation</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className=' font-bold text-[20px] leading-5 text-[#FFF1CE] mb-5'>Resources</div>
              <ul className='flex flex-col gap-y-5'>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE] '>
                  <Link to='/documentation'>Documentation</Link>
                </li>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/terms-of-service'>Terms of Service</Link>
                </li>
                <li className='text-[14px] leading-[14px] font-medium text-[#FFF1CE]'>
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Footer
