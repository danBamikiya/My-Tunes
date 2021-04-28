import React from 'react'
import { Link } from 'react-router-dom'

export const HomeMainSection = () => (
  <section className='flex items-stretch justify-between flex-grow z-10 text-primary'>
    <div className='flex-col flex flex-grow items-stretch justify-end'>
      <div className='lady-image'></div>
      {/* a div is being used for the image instead of the img tag so that it can be easily scaled and positioned */}
    </div>

    <div className='flex flex-col items-start m-4 self-center'>
      <h1 style={{ fontSize: '3.5rem' }} className='font-medium mb-4 mt-0'>
        Feel The Music
      </h1>
      <span style={{ fontSize: '1.4rem' }} className='font-medium mb-8'>
        Share songs and playlists with friends with one click
      </span>

      <Link
        to='/login'
        className='bg-blue-btn py-3 px-6 rounded-lg text-sm outline-none border-none no-underline cursor-pointer btn'
      >
        Join Now
      </Link>
    </div>
  </section>
)
