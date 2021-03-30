import React from 'react'
import { useMutation, gql } from '@apollo/client'

import { ChatInputBar } from '../ui/ChatInputBar'
import { ChatInputFieldProps } from '../ui/ChatInputField'
import { SendBtn } from '../ui/SendButton'
import { handleEvent } from '../lib/handleKeyDown'

interface State {
  state: {
    user: string
    content: string
  }
}

interface ChatInputProps extends State, ChatInputFieldProps {
  setCurrentUser: (user: string) => void
}

const POST_MESSAGE = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`

export const ChatInput: React.FC<ChatInputProps> = ({
  setCurrentUser,
  setMessage,
  state
}) => {
  const [postMessage] = useMutation(POST_MESSAGE)

  const sendMsg = () => {
    if (state.content.length > 0) {
      postMessage({
        variables: state
      })
    }
  }

  const handleKeyDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleEvent(event.currentTarget.value, setCurrentUser)
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
      <ChatInputBar setMessage={setMessage} sendMsg={sendMsg} state={state} />
      <SendBtn sendMsg={sendMsg} />
    </div>
  )
}
