import React from 'react'
import { SendIcon } from '../icons/SendBtnIcon'

export interface SendBtnProps {
  sendMsg: () => void
}

export const SendBtn: React.FC<SendBtnProps> = ({ sendMsg }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    sendMsg()
  }

  return (
    <button
      style={{ padding: '0 10px' }}
      className='h-8 text-primary bg-blue border-none rounded text-sm leading-4'
      onClick={handleClick}
    >
      Send
      <SendIcon />
    </button>
  )
}
