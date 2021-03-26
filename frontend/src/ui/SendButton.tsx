import React from 'react'

export const SendBtn = () => {
  return (
    <button
      style={{
        padding: '0 32px 0 10px',
        backgroundPosition: 'center right 8px',
        backgroundSize: '14px'
      }}
      className='h-8 text-primary bg-blue border-none rounded text-xs bg-no-repeat leading-4 chat-send-button'
    >
      Send
    </button>
  )
}
