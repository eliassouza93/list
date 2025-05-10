import { Empty } from '../Components/Empty'
import { InputText } from '../Components/InputText'
import styles from './Pages.module.css'




export function Home() {
    return (
        <div className={styles.Container}>
            <InputText />
            <div className={styles.emptyContainer}>
                <div className={styles.Box}>
                    <div className={styles.Titulo}>
                        <h5>Tarefas criadas <span>0</span> </h5>  
                        <p>Concluídas <span>0</span></p> 
                    </div>
                    <Empty />
                </div>
            </div>
        </div>
    )
}