import React from 'react'

export const BrandLogo = () => (
  <a
    href='/'
    style={{ textDecoration: 'none' }}
    className={'flex items-center text-xl text-primary'}
  >
    <img alt='soundchat logo' />
    <div className={'ml-4'}>Soundchat</div>
  </a>
)
