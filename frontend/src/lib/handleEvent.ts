import React from 'react'

interface handleKeyDownProps {
  (
    event: React.KeyboardEvent<HTMLInputElement>,
    payload: (message: string) => void
  ): void
}

export const handleKeyDown: handleKeyDownProps = (event, payload) => {
  event.preventDefault()
  payload(event.currentTarget.value)
  event.currentTarget.value = '' // Clear Fields
}
