import React, { FC, useState } from 'react'
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
// interface ChatInput {
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
// }

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
  const [state, setState] = useState({
    user: '',
    content: ''
  })

  const Messages = ({ user }: User) => {
    const { loading, data } = useQuery<MessagesData>(GET_MESSAGES)

    const ChatBubble: FC<ChatBubbleProps> = ({ sender, content }) => {
      const classes =
        sender === user
          ? { bg: 'bg-blue', flex: 'justify-end' }
          : { bg: 'bg-blue-dark', flex: 'justify-start' }

      return (
        <div className={`flex mb-4 ${classes.flex}`}>
          {sender !== user && (
            <div
              style={{ borderWidth: '1px' }}
              className={
                'h-11 w-11 p-1.5 mr-3 rounded-3xl text-center text-base border-solid border-blue-dark'
              }
            >
              {user.slice(0, 2).toUpperCase()}
            </div>
          )}
          <div
            style={{ maxWidth: '60%' }}
            className={`p-4 text-primary rounded-lg ${classes.bg}`}
          >
            {content}
          </div>
        </div>
      )
    }

    const userMessages = ({ id, user: messageUser, content }: Messages) => (
      <ChatBubble key={id} content={content} sender={messageUser} />
    )

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

  const ChatInput = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)
      setState({ ...state, user: event.target.value })
      console.log(state)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(state)
      setState({ ...state, user: '', content: '' })
    }

    return (
      <form
        onSubmit={handleSubmit}
        className='flex justify-between items-center chat-input mt-auto rounded-lg p-3.5 bg-blue-darkest'
      >
        <input
          type='text'
          // value={state.user}
          placeholder='Change User'
          style={{ padding: '0 6px 0 12px' }}
          className='h-8 border-none bg-blue-darker text-primary rounded'
          onChange={handleChange}
        />
        <div
          style={{ borderWidth: '1px', padding: '0 6px 0 12px' }}
          className={
            'border-solid border-blue-light rounded text-sm flex flex-1 overflow-hidden justify-between mx-2 bg-blue-darkest'
          }
        >
          <input
            type='text'
            className='border-none outline-none h-8 flex-1 mr-1 bg-blue-darkest text-primary'
            placeholder='Enter your message here'
            onChange={event =>
              setState({
                ...state,
                content: event.target.value
              })
            }
          />
          <button
            style={{ color: '#ffca3e' }}
            className='border-none bg-transparent p-0 flex items-center justify-center mx-1'
          ></button>
        </div>
        <button
          style={{
            padding: '0 32px 0 10px',
            backgroundPosition: 'center right 8px',
            backgroundSize: '14px'
          }}
          className='h-8 text-primary bg-blue border-none rounded text-xs bg-no-repeat leading-4 chat-send-button'
        >
          Send
        </button>
      </form>
    )
  }

  return (
    <ApolloProvider client={client}>
      <div className='container mx-auto p-6'>
        <Messages user='Damian' />
        <ChatInput />
      </div>
    </ApolloProvider>
  )
}

export default App
