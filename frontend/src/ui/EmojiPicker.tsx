import React from 'react'
import { EmojiPickerIcon } from '../icons/EmojiPickerIcon'

export const EmojiPicker = () => {
  return (
    <button
      style={{ color: '#ffca3e' }}
      className='border-none bg-transparent p-0 flex items-center justify-center mx-1'
    >
      <EmojiPickerIcon />
    </button>
  )
}
