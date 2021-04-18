import React from 'react'

export const HomeMainSection = () => (
  <section className='flex items-stretch justify-between flex-grow'>
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

      <a
        style={{ textDecoration: 'none' }}
        href='/login'
        className='text-primary bg-blue-btn py-3 px-6 rounded-lg text-sm outline-none border-none cursor-pointer btn'
      >
        Join Now
      </a>
    </div>
  </section>
)
