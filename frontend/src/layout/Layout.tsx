import React from 'react'

interface LayoutProps {
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
  <div style={pageStyle} className='h-screen'>
    <main role='main' className={`container mx-auto ${pageClass} h-full`}>
      {children}
    </main>
  </div>
)
