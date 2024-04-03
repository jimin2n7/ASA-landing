import React from 'react'
import Layout from '~/components/Layout'
import LogoGameASA from '../../../assets/logoGame.png'
import AppStore from '../../../assets/Appstore.png'
import Googleplay from '../../../assets/Googleplay.png'
import BgAbout from '../../../assets/bgAbout.png'

const About = () => {
  return (
    <div className="bgAbout">
      <Layout>
        <div className='flex flex-col items-center pt-20 pb-[100px] '>
          <div className='flex flex-col items-center mb-[70px]'>
            <h3 className=' font-bold text-[40px] leading-[44px] text-[#5A4F3E] mb-5'>About Us</h3>
            <p className='font-medium text-[20px] leading-[28px] text-[#5A4F3E] max-w-[918px] text-center'>
              ASA (AI Sketch Art) is an innovative SocialFi platform that merges the power of AI with the creativity of
              artists and enthusiasts. It provides a nurturing environment for those who have a passion for drawing,
              sketching, and visualizing art.
            </p>
          </div>
          <div className='flex items-center justify-around gap-x-[100px] mb-[60px]'>
            <div className='flex flex-col'>
              <span className='text-[24px] leading-[24px] font-bold text-[#5A4F3E] mb-[10px]'>Total Users</span>
              <span className='text-[60px] leading-[60px] font-bold text-[#F19F00]'>50k+</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-[24px] leading-[24px] font-bold text-[#5A4F3E] mb-[10px]'>Total Artworks</span>
              <span className='text-[60px] leading-[60px] font-bold text-[#F19F00]'>250k+</span>
            </div>
          </div>

          <div className='flex justify-between items-end w-full'>
            <div className='flex flex-col items-start gap-y-[22px]'>
              <div className='py-3 px-6 border-[2px] border-[#506CFF] rounded-[28px] text-[18px] leading-6 font-bold text-[#506CFF] '>
                Mobile App
              </div>
              <h4 className=' font-bold text-[32px] leading-8 text-[#5A4F3E]'>Generate on the go</h4>
              <p className='text-[18px] leading-[25.5px] font-medium text-[#5A4F3E] max-w-[486px]'>
                The AI Sketch to Art app is available on both iOS and Android. So you can tap your photos on fly, on the
                go, whenever, whenever.
              </p>
            </div>
            <div className='flex flex-col items-center gap-y-[30px]'>
              <img src={LogoGameASA} alt='LogoGameASA' />
              <div className='flex gap-x-[24px]'>
                <a href='https://apps.apple.com/ro/app/asa-ai-sketch-to-art/id6464041273' target='_blank' rel='noopener noreferrer'>
                  <img src={AppStore} alt='AppStore Download' />
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.aienthusiast.aisketch&pcampaignid=web_share' target='_blank' rel='noopener noreferrer'>
                  <img src={Googleplay} alt='Googleplay Download' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default About
