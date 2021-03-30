interface handleEventProps {
  (value: string, payload: (message: string) => void): void
}

export const handleEvent: handleEventProps = (value, payload) => {
  payload(value)
}
