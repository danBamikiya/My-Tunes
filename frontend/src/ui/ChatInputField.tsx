import React from 'react'
import { handleEvent } from '../lib/handleEvent'
import { SendBtnProps } from './SendButton'
export type ChatInputFieldProps = {
  setMessage: (message: string) => void
}

type State = {
  state: {
    user: string
    content: string
  }
}

type InputField = ChatInputFieldProps & SendBtnProps & State

export const ChatInputField: React.FC<InputField> = ({
  setMessage,
  sendMsg,
  state
}) => {
  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleEvent(event.target.value, setMessage)
  }

  const handleKeyDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMsg()
    }
  }

  return (
    <input
      type='text'
      value={state.content}
      className='border-none outline-none h-8 flex-1 mr-1 bg-blue-darkest text-primary'
      placeholder='Enter your message here'
      onChange={handleChangeEvent}
      onKeyDown={handleKeyDownEvent}
    />
  )
}
