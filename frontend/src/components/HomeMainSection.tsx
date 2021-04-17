import React from 'react'

export const HomeMainSection = () => (
  <section>
    <div className='flex-col flex flex-grow items-stretch justify-end'>
      <div className='lady-image'></div>
      {/* we are using a div for the image instead of the img tag so that we can trickishly scale and position the image */}
    </div>
    <div className='call-to-action'>
      <h1 className='title'>Feel The Music</h1>
      <span className='subtitle'>
        Stream over 20 thousand songs with one click
      </span>
      <a href='/login' className='btn'>
        Join Now
      </a>
    </div>
  </section>
)
