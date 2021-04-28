import React from 'react'

import { Layout } from '../layout/Layout'
import { Header } from '../components/Header'
import { LoginMainSection } from '../components/LoginMainSection'

import '../styles/Login.css'

export default function Login() {
  return (
    <Layout>
      <Header />
      <LoginMainSection />

      <div className='login-page-circle-1'></div>
      <div className='login-page-circle-2'></div>
    </Layout>
  )
}
