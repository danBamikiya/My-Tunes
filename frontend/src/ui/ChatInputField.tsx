import React from 'react'

export const ChatInputField = sendMsg => {
  return (
    <input
      type='text'
      className='border-none outline-none h-8 flex-1 mr-1 bg-blue-darkest text-primary'
      placeholder='Enter your message here'
      onChange={sendMsg}
    />
  )
}
