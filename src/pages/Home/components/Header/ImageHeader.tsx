import React from 'react'
import CardNFT from '~/components/CardNFT'

const ImageHeader = () => {
  return (
    <div className='purple_bg relative'>
      <CardNFT/>
      <div className='absolute top-0 right-0 translate-x-1/3 translate-y-[20%] z-[-1]'>
        <CardNFT/>
      </div>
    </div>
  )
}

export default ImageHeader