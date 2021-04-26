import React from 'react'

import { LoginForm } from '../ui/LoginForm'

export const LoginMainSection = () => (
  <section className='flex items-center justify-between flex-grow'>
    <h1 className='text-8xl font-bold'>
      Join the <span className='text-info'>fun.</span>
    </h1>
    <LoginForm />
  </section>
)
