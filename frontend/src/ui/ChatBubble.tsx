import React from 'react'

type ChatBubbleProps = {
  user: string
  sender: string
  content: string
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  user,
  sender,
  content
}) => {
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
