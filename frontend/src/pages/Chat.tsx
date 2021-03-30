import React, { useState, useEffect } from 'react'
import { ChatInput } from '../components/ChatInput'
import { Messages } from '../components/Messages'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
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

  const sendMessage = (message: string) => {
    setState({ ...state, content: message })
  }

  return (
    <ApolloProvider client={client}>
      <div className='container mx-auto p-6'>
        <Messages user='Damian' />
        <ChatInput setCurrentUser={setCurrentUser} sendMsg={sendMessage} />
      </div>
    </ApolloProvider>
  )
}
