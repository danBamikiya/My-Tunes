import React from 'react'

import { Layout } from '../layout/Layout'
import { HomeMainSection } from '../components/HomeMainSection'
import { Header } from '../components/Header'

import '../styles/Home.css'

export default function Home() {
  const home = {
    homeClass: 'home-global px-10 flex-grow flex flex-col',
    homeStyle: {
      backgroundColor: '#2f303a'
    }
  }

  return (
    <Layout pageClass={home.homeClass} pageStyle={home.homeStyle}>
      <Header />
      <HomeMainSection />
      <div className='home-page-circle-1'></div>
      <div className='home-page-circle-2'></div>
      <div className='home-page-circle-3'></div>
    </Layout>
  )
}
