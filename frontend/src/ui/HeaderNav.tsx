import React from 'react'

export const HeaderNav = () => (
  <nav>
    <ul className='flex list-none'>
      <li>
        <a
          style={{ textDecoration: 'none' }}
          href='/login'
          className='p-4 nav-link'
        >
          Join
        </a>
      </li>
    </ul>
  </nav>
)
