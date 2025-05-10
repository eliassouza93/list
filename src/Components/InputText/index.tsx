
import React, { useState } from 'react'
import styles from './Input.module.css'
import { Button } from '../Button'

interface TextType {
    setDatas: (value: string) => void
}

export function InputText({ setDatas }: TextType) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setInputValue(newValue)
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setDatas(inputValue)
        setInputValue('')
        console.log(inputValue)
    };

    return (
        <form className={styles.Box} onSubmit={handleSubmit}>
            <input
                className={styles.Container}
                placeholder='Adicione uma nova tarefa'
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            <Button />
        </form>
    );
}
