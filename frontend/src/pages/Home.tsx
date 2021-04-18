import React from 'react'

import { HomeMainSection } from '../components/HomeMainSection'
import { MainHeader } from '../components/MainHeader'

export default function Home() {
  return (
    <div className='container mx-auto px-10 flex-grow flex flex-col'>
      <MainHeader />
      <HomeMainSection />
    </div>
  )
}
