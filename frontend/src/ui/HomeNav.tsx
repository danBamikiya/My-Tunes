import React from 'react'

export const HomeNav = () => (
  <nav>
    <ul className='flex list-none'>
      <li>
        <a
          style={{ textDecoration: 'none', color: 'inherit' }}
          href='/login'
          className='text-primary p-4 home-nav-link'
        >
          Join
        </a>
      </li>
    </ul>
  </nav>
)
