import React from 'react'

interface handleKeyDownProps {
  (
    event: React.KeyboardEvent<HTMLInputElement>,
    payload: (message: string) => void
  ): void
}

export const handleKeyDown: handleKeyDownProps = (event, payload) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    console.log(event.currentTarget.value)

    payload(event.currentTarget.value)
  }
}
