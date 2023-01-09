import React from 'react'
import HeroContainer from './HeroContainer'
import HomeSection from './HomeSection'

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HeroContainer />
      <HomeSection />
    </div>
  )
}

export default MainContainer