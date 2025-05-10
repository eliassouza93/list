
import React, { useState } from 'react'
import styles from './Input.module.css'
import { Button } from '../Button'

interface InputTextType {
  setDatas: (value: string) => void
}

export function InputText({ setDatas }: InputTextType) {
  const [inputValue, setInputValue] = useState('')

  const handleDatas = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDatas(inputValue)
    //setInputValue('')
  }
  return (
    <form className={styles.Box} onSubmit={handleSubmit}>
      <input
        className={styles.Container}
        required
        placeholder='Adicione uma nova tarefa'
        type="text"
        value={inputValue}
        onChange={handleDatas}
      />
      <Button />
    </form>
  )
}