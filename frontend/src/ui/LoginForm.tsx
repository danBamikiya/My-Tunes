import React from 'react'

export const LoginForm = () => (
  <form
    action=''
    method='post'
    style={{
      backgroundColor: '#202027',
      width: '50vw',
      maxWidth: '50%',
      borderRadius: '20px'
    }}
    className='px-8 py-16'
  >
    <div className='mb-8 flex flex-col'>
      <label className='font-bold mb-2'>Name:</label>
      <input
        className='outline-none bg-transparent border border-solid text-base p-2 login-form-input'
        type='text'
        autoComplete='name'
      />
    </div>
    <div className='mb-8 flex flex-col'>
      <label className='font-bold mb-2'>Email:</label>
      <input
        className='outline-none bg-transparent border border-solid text-base p-2 login-form-input'
        type='email'
        autoComplete='email'
      />
    </div>
    <div className='mb-8 flex flex-col'>
      <label className='font-bold mb-2'>Password:</label>
      <input
        className='outline-none bg-transparent border border-solid text-base p-2 login-form-input'
        type='password'
        autoComplete='current-password'
      />
    </div>
    <div className='flex flex-col'>
      <button
        className='text-primary bg-blue-btn py-3 px-6 rounded-lg text-sm outline-none border-none no-underline cursor-pointer btn'
        type='submit'
      >
        Join Now
      </button>
    </div>
  </form>
)
