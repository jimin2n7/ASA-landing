import React from 'react'
import Layout from '~/components/Layout'
import Allocation_img from '../../../../assets/allocation.svg'

const Allocation = () => {
  return (
    <div className='py-[100px]'>
      <Layout>
        <div className='flex flex-col items-center'>
          <h3 className=' font-bold text-[40px] leading-[44px] text-[#5A4F3E] mb-5'>$AISA allocation</h3>
          <div className='mt-[80px]'>
            <img src={Allocation_img} alt='Allocation_img' />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Allocation
