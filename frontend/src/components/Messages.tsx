import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ChatBubble } from '../ui/ChatBubble'

interface User {
  user: string
}

interface MessagesProps extends User {
  id: number
  content: string
}

interface MessagesData {
  messages: MessagesProps[]
}

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`

export const Messages = ({ user }: User) => {
  const { loading, data } = useQuery<MessagesData>(GET_MESSAGES, {
    pollInterval: 500
  })

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
