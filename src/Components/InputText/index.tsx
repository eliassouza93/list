import { Button } from '../Button'
import styles from './Input.module.css'



export function InputText() {
    return (
        <form className={styles.Box}>
            <input
                className={styles.Container}
                placeholder='Adicione uma nova tarefa'
                type="text"

            />
            <Button />
        </form>
    )
}