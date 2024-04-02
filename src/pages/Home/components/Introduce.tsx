import React from 'react'

const Introduce = () => {
  return (
    <div className='max-w-[620px] flex flex-col gap-y-[50px]'>
        <div className=' flex flex-col gap-y-[8px]'>
            <h1 className='text-[72px] font-bold leading-[72px] text-[#F19F00]'>ASA NFT</h1>
            <h2 className='text-[40px] font-bold leading-[44px] text-[#5A4F3E]'>AI <span className='text-[#506CFF]'>+</span> Blockchain Integration</h2>
            <p className='font-medium text-[18px] text-[#8B795F]'>ASA combines artificial intelligence with blockchain technology to create and manage digital art as NFTs. This integration ensures secure, transparent, and tamper-proof transactions while enabling the AI to assist in the creative process</p>
        </div>
        <div className='flex gap-x-[16px] items-center'>
            <button className='px-[24px] py-[12px] bg-[#506CFF] text-[#FFFFFF] font-bold rounded-full shadow-[0_2px_4px_0_#00000026] text-[18px] leading-[24px]'>Connect Wallet</button>
            <button className='px-[24px] py-[12px] bg-[#FFFFF] text-[#506CFF] font-bold rounded-full shadow-[0_2px_4px_0_#00000026] text-[18px] leading-[24px] border-[2px] border-[#506CFF]'>Whitelist Now</button>
        </div>
    </div>
  )
}

export default Introduce