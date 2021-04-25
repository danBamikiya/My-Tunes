import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderNav = () => (
  <nav>
    <ul className='flex list-none'>
      <li>
        <Link to='/login' className='p-4 nav-link no-underline'>
          Join
        </Link>
      </li>
    </ul>
  </nav>
)
