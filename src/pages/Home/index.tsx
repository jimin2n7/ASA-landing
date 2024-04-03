import React from 'react'
import About from './components/About'
import './style.scss'
import Partner from './components/Partner'
import Footer from '~/components/Footer'
import Hero from './components/Header/Hero'
import MainWork from './components/Work/MainWork'
import './style.scss'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <MainWork />
      <Partner />
      <Footer />
    </div>
  )
}

export default Home
