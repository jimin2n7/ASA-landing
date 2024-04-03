import React from 'react'
import Layout from '~/components/Layout'
import Marquee from 'react-fast-marquee'
import CardNFT from '~/components/CardNFT'

const HightlightNFT = () => {
  return (
    <div className='py-[80px]'>
      <Layout>
        <div className='flex flex-col'>
          <div className='flex items-center'>
            <h3 className=' font-bold text-[40px] leading-[44px] text-[#5A4F3E] flex-1 text-center'>Hightlight NFT</h3>
            <button className='px-[24px] py-[12px] bg-[#FFFFF] text-[#506CFF] font-bold rounded-full shadow-[0_2px_4px_0_#00000026] text-[18px] leading-[24px] border-[2px] border-[#506CFF]'>
              View All
            </button>
          </div>
          <div className='mt-[35px]'>
            <Marquee pauseOnHover>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
            </Marquee>
            <Marquee pauseOnHover direction='right' className='mt-6' speed={100}>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
              <div className='mx-3'>
                <CardNFT />
              </div>
            </Marquee>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default HightlightNFT
