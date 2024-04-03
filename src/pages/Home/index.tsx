import React from 'react'
import About from './components/About'
import './style.scss'
import Partner from './components/Partner'
import Footer from '~/components/Footer'
import Hero from './components/Header/Hero'
import MainWork from './components/Work/MainWork'
import HightlightNFT from './components/Hightlight'
import Allocation from './components/Allocation'
import './style.scss'
import MainSystem from './components/System/MainSystem'
import MainRoadMap from './components/RoadMap/MainRoadMap'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About />
      <HightlightNFT />
      <MainWork/>
      <div className='bg-system'>
        <MainSystem/>
        <MainRoadMap/>
      </div>
      <Allocation />
      <Partner />
      <Footer />
    </div>
  )
}

export default Home
