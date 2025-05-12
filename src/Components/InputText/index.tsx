// src/components/InputText.tsx
import React, { useState } from 'react'
import styles from './Input.module.css'
import { Button } from '../Button'

interface InputTextType {
  setDatas: (value: string) => void
}

export function InputText({ setDatas }: InputTextType) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      setDatas(inputValue)
      setInputValue('')
    }
  }

  return (
    <form className={styles.Box} onSubmit={handleSubmit}>
      <input
        className={styles.Container}
        placeholder="Adicione uma nova tarefa"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button />
    </form>
  )
}