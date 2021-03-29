import React from 'react'
import { SendIcon } from '../icons/SendBtnIcon'

export const SendBtn = () => {
  return (
    <button
      style={{
        padding: '0 32px 0 10px',
        backgroundPosition: 'center right 8px'
      }}
      className='h-8 text-primary bg-blue border-none rounded text-xs leading-4'
    >
      Send
      <SendIcon />
    </button>
  )
}
