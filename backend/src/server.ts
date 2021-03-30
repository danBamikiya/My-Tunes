import { GraphQLServer, PubSub } from 'graphql-yoga'

interface Message {
  id: number
  user: string
  content: string
}

interface Subscription {
  pubsub: PubSub
}

interface Subscriber {
  (): boolean
}

const messages: Message[] = []

const typeDefs = `
  type Message {
      id:  ID!
      user:  String!
      content:  String!
  }

  type Query {
      messages:  [Message!]
  }

  type  Mutation {
      postMessage(user: String!, content: String!): ID!
  }

  type Subscription {
      messages:  [Message!]
  }
`

const subscribers: Subscriber[] = []
const onMessagesUpdates = (fn: Subscriber) => subscribers.push(fn)

const resolvers = {
  Query: {
    messages: () => messages
  },
  Mutation: {
    postMessage: (parent: any, { user, content }: Message) => {
      const id = messages.length
      messages.push({ id, user, content })
      subscribers.forEach(fn => fn())
      return id
    }
  },
  Subscription: {
    messages: {
      subscribe: (parent: any, args: any, { pubsub }: Subscription) => {
        const channel = Math.random().toString(36).slice(2, 15) // random channel name
        onMessagesUpdates(() => pubsub.publish(channel, { messages }))
        setTimeout(() => pubsub.publish(channel, { messages }), 0)
        return pubsub.asyncIterator(channel)
      }
    }
  }
}
const options = { port: 4040 }
const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

server.start(options, ({ port }) => {
  console.log(`Server started on http://localhost:${port}`)
})
