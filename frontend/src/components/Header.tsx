import React from 'react'

import { BrandLogo } from '../ui/BrandLogo'
import { HeaderNav } from '../ui/HeaderNav'

export const Header = () => (
  <header
    style={{ height: '140px' }}
    className='flex justify-between items-center z-10  text-primary'
  >
    <BrandLogo />
    <HeaderNav />
  </header>
)
