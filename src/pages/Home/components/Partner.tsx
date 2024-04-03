import React from 'react'
import Layout from '~/components/Layout'
import Metamask from '../../../assets/Metamask_logo.png'
import BitgoLogo from '../../../assets/Bitgo_logo.png'
import Coinbase from '../../../assets/Coinbase_logo.png'
import Trustwallet from '../../../assets/Trustwallet_logo.png'
import Exodus from '../../../assets/Exodus_logo.png'
import TelegramIcon from "../../../assets/telegram.png"
import TwitterIcon from "../../../assets/twitter.png"
import DiscordIcon from "../../../assets/discord.png"

const Partner = () => {
  return (
    <div className='bg-[#FFF1CE]'>
      <Layout>
        <div className='flex flex-col py-20'>
          <div className='flex flex-col w-full bg-white rounded-[20px] items-center py-[68px]'>
            <h3 className='font-bold text-[40px] leading-[44px] text-[#5A4F3E] mb-[40px]'>Investors & Partners</h3>
            <div className='flex justify-center items-center gap-x-6 flex-wrap'>
              <img src={Metamask} alt='Metamask Logo' className='w-[180px] h-[60px]' />
              <img src={BitgoLogo} alt='Bitgo Logo' className='w-[180px] h-[60px]' />
              <img src={Coinbase} alt='Coinbase Logo' className='w-[180px] h-[60px]' />
              <img src={Trustwallet} alt='Trustwallet Logo' className='w-[180px] h-[60px]' />
              <img src={Exodus} alt='Exodus Logo' className='w-[180px] h-[60px]' />
            </div>
          </div>
          <div className='flex flex-col mt-[90px] items-center'>
            <h3 className='font-bold text-[40px] leading-[40px] text-[#F19F00]'>Join Out Community</h3>
            <p className='font-medium text-[24px] leading-6 text-[#5A4F3E] mt-5'>
              Together we can make the ASA community even stronger
            </p>
            <div className='mt-[40px] flex justify-center gap-x-[42px]'>
              <a href='#' target='_blank' rel='noopener noreferrer' className='w-[48px] h-[48px]' >
                <img src={TelegramIcon} alt='TelegramIcon' className='w-[48px] h-[48px]'/>
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'className='w-[48px] h-[48px]'>
                <img src={TwitterIcon} alt='TwitterIcon' />
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'className='w-[48px] h-[48px]'>
                <img src={DiscordIcon} alt='DiscordIcon' />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Partner
