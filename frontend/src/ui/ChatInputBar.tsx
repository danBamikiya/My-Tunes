import React from 'react'
import { ChatInputField, ChatInputFieldProps } from './ChatInputField'
import { SendBtnProps } from './SendButton'
import { EmojiPicker } from './EmojiPicker'

interface ChatInputBarProps extends ChatInputFieldProps, SendBtnProps {
  state: {
    user: string
    content: string
  }
}

export const ChatInputBar: React.FC<ChatInputBarProps> = ({
  setMessage,
  sendMsg,
  state
}) => {
  return (
    <div
      style={{ borderWidth: '1px', padding: '0 6px 0 12px' }}
      className={
        'border-solid border-blue-light rounded text-sm flex flex-1 overflow-hidden justify-between mx-2 bg-blue-darkest'
      }
    >
      <ChatInputField setMessage={setMessage} sendMsg={sendMsg} state={state} />
      <EmojiPicker />
    </div>
  )
}
