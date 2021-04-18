import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  pageClass: string
}

export const Layout: React.FC<LayoutProps> = ({ children, pageClass }) => (
  <main role='main' className={`container mx-auto ${pageClass}`}>
    {children}
  </main>
)
