import * as React from 'react'
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4040',
  cache: new InMemoryCache()
})

interface User {
  user: string
}

interface Messages extends User {
  id: number
  content: string
}

interface MessagesData {
  messages: Messages[]
}

interface ChatBubbleProps {
  sender: string
  content: string
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

function App() {
  const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, content }) => {
    const mode = sender
      ? ['bg-blue', 'flex-end']
      : ['bg-blue-dark', 'flex-start']
    const classes = mode.join(' ')

    return (
      <div className={`flex mb-4 ${classes}`}>
        <div
          className={
            'h-11 w-11 mr-3 rounded-3xl text-center text-base border-2 border-solid border-blue'
          }
        >
          {sender.slice(0, 2).toUpperCase()}
        </div>
        <div
          style={{ maxWidth: '60%' }}
          className={'p-4 text-primary rounded-lg'}
        >
          {content}
        </div>
      </div>
    )
  }

  const userMessages = ({ id, user: messageUser, content }: Messages) => (
    <ChatBubble key={id} content={content} sender={messageUser} />
  )

  const Messages = ({ user }: User) => {
    const { loading, data } = useQuery<MessagesData>(GET_MESSAGES)
    // if (loading) {
    //   return <p>Loading ...</p>
    // } else if (!data) {
    //   return <p>No message</p>
    // } else {
    //   return userMessages(data.messages[0])
    // }

    return (
      <div>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <>
            {data?.messages.map(userMessages) || (
              <>
                <p>No message</p>
              </>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <ApolloProvider client={client}>
      <div className='container mx-auto p-6'>
        <Messages user='Ajoudi' />
      </div>
    </ApolloProvider>
  )
}

export default App
