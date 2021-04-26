import React from 'react'
import { Link } from 'react-router-dom'

import { TwitterIcon } from '../icons/TwitterIcon'
import { FacebookIcon } from '../icons/FacebookIcon'

export const LoginFooter = () => (
  <footer
    style={{ height: '70px', backgroundColor: '#202027' }}
    className='flex justify-between items-center font-bold'
  >
    <div className='flex justify-between max-w-screen-2xl my-0 mx-auto flex-grow'>
      <nav>
        <ul className='flex'>
          <li>
            <Link to='#'>About us</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className='flex'>
          <li>
            <Link to='#'>
              <TwitterIcon /> Twitter
            </Link>
          </li>
          <li>
            <Link to='#'>
              <FacebookIcon /> Facebook
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)
