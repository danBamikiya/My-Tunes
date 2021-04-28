import React from 'react'
import { Link } from 'react-router-dom'

import { TwitterIcon } from '../icons/TwitterIcon'
import { FacebookIcon } from '../icons/FacebookIcon'

export const LoginFooter = () => (
  <footer
    style={{ height: '70px', backgroundColor: '#202027' }}
    className='flex justify-between items-center font-bold z-10'
  >
    <div className='container flex justify-between mx-auto flex-grow w-full px-10'>
      <nav>
        <ul className='flex'>
          <li>
            <Link
              to='#'
              className='flex items-center justify-between p-4 nav-link no-underline text-primary'
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to='#'
              className='flex items-center justify-between p-4 nav-link no-underline text-primary'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className='flex'>
          <li>
            <Link
              to='#'
              className='flex justify-between p-4 nav-link no-underline text-primary'
            >
              <TwitterIcon classnames='inline mr-1' /> Twitter
            </Link>
          </li>
          <li>
            <Link
              to='#'
              className='flex items-center justify-between p-4 nav-link no-underline text-primary'
            >
              <FacebookIcon classnames='inline mr-1' /> Facebook
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)
