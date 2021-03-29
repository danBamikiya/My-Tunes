import React from 'react'
import { ChatInput } from '../components/ChatInput'
import { Messages } from '../components/Messages'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4040',
  cache: new InMemoryCache()
})

export default function Chat() {
  return (
    <ApolloProvider client={client}>
      <div className='container mx-auto p-6'>
        <Messages user='Damian' />
        <ChatInput />
      </div>
    </ApolloProvider>
  )
}
