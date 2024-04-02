import React from 'react'
import Layout from '~/components/Layout'
import Introduce from './Introduce'

const Hero = () => {
  return (
    <div>
        <Layout>
            <div className='grid grid-cols-5'>
                <div className='col-span-3'>
                    <Introduce/>
                </div>
                <div className='col-span-2'>
                    Hero
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Hero