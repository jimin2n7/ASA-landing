import React from 'react'
import About from './components/About'
import './style.scss'
import Partner from './components/Partner'
import Footer from '~/components/Footer'
import Hero from './components/Header/Hero'
import MainWork from './components/Work/MainWork'
import HightlightNFT from './components/Hightlight'
import './style.scss'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <HightlightNFT />
      <MainWork />
      <Partner />
      <Footer />
    </div>
  )
}

export default Home
