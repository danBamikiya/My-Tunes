import React from 'react'

import { LoginFooter } from '../ui/LoginFooter'
import { isPage } from '../lib/isPage'

type LayoutProps = {
  children: React.ReactNode
  pageClass?: string
  pageStyle?: {
    backgroundColor: string
  }
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  pageClass,
  pageStyle
}) => (
  <div style={pageStyle} className='min-h-screen flex flex-col relative'>
    <main role='main' className={`container mx-auto ${pageClass} h-full`}>
      {children}
    </main>
    {isPage('login') ? <LoginFooter /> : <></>}
  </div>
)
