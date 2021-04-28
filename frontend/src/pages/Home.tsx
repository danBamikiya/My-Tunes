import React from 'react'

import { Layout } from '../layout/Layout'
import { HomeMainSection } from '../components/HomeMainSection'
import { Header } from '../components/Header'

import '../styles/Home.css'

export default function Home() {
  return (
    <Layout>
      <Header />
      <HomeMainSection />

      <div className='home-page-circle-1'></div>
      <div className='home-page-circle-2'></div>
      <div className='home-page-circle-3'></div>
    </Layout>
  )
}
