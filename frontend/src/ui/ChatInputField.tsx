import React from 'react'
import { handleKeyDown } from '../lib/handleKeyDown'

export interface ChatInputFieldProps {
  sendMsg: (message: string) => void
}

export const ChatInputField: React.FC<ChatInputFieldProps> = ({ sendMsg }) => {
  const handleKeyDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown(event, sendMsg)
  }

  return (
    <input
      type='text'
      className='border-none outline-none h-8 flex-1 mr-1 bg-blue-darkest text-primary'
      placeholder='Enter your message here'
      onKeyDown={handleKeyDownEvent}
    />
  )
}
