import React from 'react'
import { ChatInputBar } from '../ui/ChatInputBar'
import { SendBtn } from '../ui/SendButton'

export function ChatInput() {
  return (
    <div className='flex justify-between items-center chat-input mt-auto rounded-lg p-3.5 bg-blue-darkest'>
      <ChatInputBar />
      <SendBtn />
    </div>
  )
}
