import React from 'react'
import { Link } from 'react-router-dom'

export const BrandLogo = () => (
  <Link to='/' className={'flex items-center text-xl no-underline'}>
    <img alt='soundchat logo' />
    <div className={'ml-4'}>Soundchat</div>
  </Link>
)
