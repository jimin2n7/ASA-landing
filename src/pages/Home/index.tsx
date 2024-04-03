import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import './style.scss'
import Partner from './components/Partner'
import Footer from '~/components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Partner />
      <Footer />
    </div>
  )
}

export default Home
