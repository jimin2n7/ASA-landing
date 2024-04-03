import React from 'react'
import Hero from './components/Header/Hero'
import MainWork from './components/Work/MainWork'
import './style.scss'
import MainSystem from './components/System/MainSystem'
import MainRoadMap from './components/RoadMap/MainRoadMap'

const Home = () => {
  return (
    <div>
        <Hero/>
        <MainWork/>
        <div className='bg-system'>
          <MainSystem/>
          <MainRoadMap/>
        </div>
    </div>
  )
}

export default Home