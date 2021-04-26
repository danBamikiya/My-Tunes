import React from 'react'

import { Layout } from '../layout/Layout'
import { Header } from '../components/Header'
import { LoginMainSection } from '../components/LoginMainSection'

import '../styles/Login.css'

export default function Login() {
  const login = {
    loginClass: 'login-global px-10 flex-grow flex flex-col',
    loginStyle: {
      backgroundColor: '#2f303a'
    }
  }

  return (
    <Layout pageClass={login.loginClass} pageStyle={login.loginStyle}>
      <Header />
      <LoginMainSection />

      <div className='login-page-circle-1'></div>
      <div className='login-page-circle-2'></div>
    </Layout>
  )
}
