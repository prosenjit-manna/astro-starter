import React from 'react'
import style from './button.module.css';
export default function Button({ text }: { text?: string }) {
  return (
    <button className={`button ${style.button}`}>{text || 'Button'}</button>
  )
}
