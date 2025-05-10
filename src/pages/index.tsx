import { Empty } from '../Components/Empty'
import { InputText } from '../Components/InputText'
import styles from './Pages.module.css'




export function Home() {
    return (
        <div className={styles.Container}>
            <InputText />
            <div className={styles.emptyContainer}>
                <div className={styles.Box}>
                    <Empty />
                </div>

            </div>

        </div>
    )
}