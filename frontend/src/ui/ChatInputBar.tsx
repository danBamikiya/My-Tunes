import React from 'react'
import { ChatInputField } from './ChatInputField'
import { EmojiPicker } from './EmojiPicker'

export function ChatInputBar() {
  return (
    <div
      style={{ borderWidth: '1px', padding: '0 6px 0 12px' }}
      className={
        'border-solid border-blue-light rounded text-sm flex flex-1 overflow-hidden justify-between mx-2 bg-blue-darkest'
      }
    >
      <ChatInputField />
      <EmojiPicker />
    </div>
  )
}
