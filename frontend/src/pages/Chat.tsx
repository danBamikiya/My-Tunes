import React, { useState, useEffect } from 'react'
import { ChatInput } from '../components/ChatInput'
import { Messages } from '../components/Messages'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'

import '../styles/Chat.css'

const link = new WebSocketLink({
  uri: 'ws://localhost:4040/',
  options: {
    reconnect: true
  }
})

const client = new ApolloClient({
  link,
  uri: 'http://localhost:4040',
  cache: new InMemoryCache()
})

export default function Chat() {
  const [state, setState] = useState({
    user: '',
    content: ''
  })

  useEffect(() => {
    console.log(state)
  }, [state])

  const setCurrentUser = (user: string) => {
    setState({ ...state, user: user })
  }

  const setMessage = (message: string) => {
    setState({ ...state, content: message })
  }

  return (
    <ApolloProvider client={client}>
      <div className='container mx-auto p-6'>
        <Messages user={state.user} />
        <ChatInput
          setCurrentUser={setCurrentUser}
          setMessage={setMessage}
          state={state}
        />
      </div>
    </ApolloProvider>
  )
}
