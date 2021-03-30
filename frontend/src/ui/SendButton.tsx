import React from 'react'
import { SendIcon } from '../icons/SendBtnIcon'

export const SendBtn = () => {
  return (
    <button
      style={{ padding: '0 10px' }}
      className='h-8 text-primary bg-blue border-none rounded text-sm leading-4'
    >
      Send
      <SendIcon />
    </button>
  )
}
