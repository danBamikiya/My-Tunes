import React from 'react'
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost/4040',
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
  const userMessages = ({ id, user: messageUser, content }: Messages) => {
    return <>{content}</>
  }

  const Messages = ({ user }: User) => {
    const { loading, data } = useQuery<MessagesData>(GET_MESSAGES)
    return (
      <div>
        <h1>Messages</h1>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <h3>
            {data?.messages.map(userMessages) || (
              <>
                <p>No message</p>
              </>
            )}
          </h3>
        )}
      </div>
    )
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Messages user="Damian" />
      </div>
    </ApolloProvider>
  )
}

export default App
