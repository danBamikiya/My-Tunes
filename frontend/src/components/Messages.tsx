import React from 'react'
import { useSubscription, gql } from '@apollo/client'
import { ChatBubble } from '../ui/ChatBubble'

type User = {
  user: string
}

type MessagesProps = User & {
  id: number
  content: string
}

type MessagesData = {
  messages: MessagesProps[]
}

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`

export const Messages = ({ user }: User) => {
  const { loading, data } = useSubscription<MessagesData>(GET_MESSAGES)

  const userMessages = ({ id, user: messageUser, content }: MessagesProps) => (
    <ChatBubble key={id} user={user} content={content} sender={messageUser} />
  )

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {data?.messages.map(userMessages) || (
            <div className='container mx-auto p-6'>
              <p>No message</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
