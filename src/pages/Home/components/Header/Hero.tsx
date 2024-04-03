import React from 'react'
import Layout from '~/components/Layout'
import Introduce from './Introduce'
import MainSupport from './MainSupport'
import ImageHeader from './ImageHeader'
const Hero = () => {
  return (
   
    <div className='bg-img'>
        <Layout>
            <div className='grid grid-cols-5 h-[700px]'>
                <div className='col-span-3 flex items-center'>
                    <Introduce/>
                </div>
                <div className='col-span-2 flex items-center z-10'>
                    <ImageHeader/>
                </div>
            </div>
        </Layout>
        <div>
            <MainSupport/>
        </div>
    </div>
    
  )
}

export default Hero