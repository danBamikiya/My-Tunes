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
  const Messages = ({ user }: User) => {
    const { loading, data } = useQuery<Messages>(GET_MESSAGES)
    return (
      <div>
        <h1>Messages</h1>
        {loading ? <p>Loading ...</p> : <h3>{JSON.stringify(data)}</h3>}
      </div>
    )
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Messages user="Jack" />
      </div>
    </ApolloProvider>
  )
}

export default App
