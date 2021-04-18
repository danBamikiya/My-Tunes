import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  pageClass: string
  pageStyle?: {
    backgroundColor: string
  }
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  pageClass,
  pageStyle
}) => (
  <main
    role='main'
    style={pageStyle}
    className={`container mx-auto ${pageClass}`}
  >
    {children}
  </main>
)
