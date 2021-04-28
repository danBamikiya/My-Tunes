import React from 'react'

import { LoginForm } from '../ui/LoginForm'

export const LoginMainSection = () => (
  <section className='flex items-center justify-between flex-grow text-primary'>
    <h1 style={{ fontSize: '4.2rem' }} className='font-bold z-10'>
      Join the <span className='text-info'>fun.</span>
    </h1>
    <LoginForm />
  </section>
)
