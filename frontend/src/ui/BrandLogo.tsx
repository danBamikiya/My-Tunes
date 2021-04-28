import React from 'react'

import { Link } from 'react-router-dom'
import { SoundChatIcon } from '../icons/SoundChatIcon'

export const BrandLogo = () => (
  <Link to='/' className={'flex items-center text-xl no-underline'}>
    <SoundChatIcon classnames='inline mr-1' />
    <div className='ml-4 text-3xl'>Soundchat</div>
  </Link>
)
