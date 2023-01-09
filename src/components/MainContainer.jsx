import React from 'react'
import HeroContainer from './HeroContainer'
import HomeOrder from './HomeOrder'
import HomeSection from './HomeSection'

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HeroContainer />
      <HomeSection />
      <HomeOrder />
    </div>
  )
}

export default MainContainer