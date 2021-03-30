import React from 'react'
import { ChatInputBar } from '../ui/ChatInputBar'
import { ChatInputFieldProps } from '../ui/ChatInputField'
import { SendBtn } from '../ui/SendButton'
import { handleKeyDown } from '../lib/handleKeyDown'

interface ChatInputProps extends ChatInputFieldProps {
  setCurrentUser: (user: string) => void
}

export const ChatInput: React.FC<ChatInputProps> = ({
  setCurrentUser,
  sendMsg
}) => {
  const handleKeyDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleKeyDown(event, setCurrentUser)
    }
  }

  return (
    <div className='flex justify-between items-center chat-input mt-auto rounded-lg p-3.5 bg-blue-darkest'>
      <input
        type='text'
        // value={state.user}
        placeholder='Change User'
        style={{ padding: '0 6px 0 12px' }}
        className='h-8 border-none bg-blue-darker text-primary rounded'
        onKeyDown={handleKeyDownEvent}
      />
      <ChatInputBar sendMsg={sendMsg} />
      <SendBtn />
    </div>
  )
}
