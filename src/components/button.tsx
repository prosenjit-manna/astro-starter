import React from 'react'

export default function Button({ text }: { text?: string }) {
  return (
    <div>{text || 'Button'}</div>
  )
}
