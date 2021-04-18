import React from 'react'

import { Layout } from '../layout/Layout'
import { HomeMainSection } from '../components/HomeMainSection'
import { MainHeader } from '../components/MainHeader'

export default function Home() {
  const home = {
    homeClass: 'home-global px-10 flex-grow flex flex-col'
  }

  return (
    <Layout pageClass={home.homeClass}>
      <MainHeader />
      <HomeMainSection />
    </Layout>
  )
}
