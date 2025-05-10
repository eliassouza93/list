import plus from '../../assets/plus.png'
import styles from './Button.module.css'


export function Button(){
    return(
        <div className={styles.BoxContainer}>
            <button className={styles.Container}>Criar <img className={styles.imagem} src={plus} /> </button> 
        </div>
    )
}