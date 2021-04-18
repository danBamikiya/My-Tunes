import React from 'react'

interface LayoutProps {
  children: React.ReactChild
  // React.ReactElement
  mainClass: string[]
}

export const Layout: React.FC<LayoutProps> = ({ children, mainClass }) => (
  <main role='main' className={`container mx-auto ${mainClass}`}>
    {children}
  </main>
)
