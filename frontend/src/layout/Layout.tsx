import React from 'react'

import { LoginFooter } from '../ui/LoginFooter'
import { isPage } from '../lib/isPage'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div
    style={{ backgroundColor: '#2f303a' }}
    className='min-h-screen flex flex-col relative'
  >
    <main
      role='main'
      className='container mx-auto px-10 flex-grow flex flex-col h-full'
    >
      {children}
    </main>
    {isPage('login') ? <LoginFooter /> : <></>}
  </div>
)
