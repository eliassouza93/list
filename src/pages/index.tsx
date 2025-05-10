import { useState } from 'react'
import { InputText } from '../Components/InputText'
import { Empty } from '../Components/List/Empty'
import styles from './Pages.module.css'
import { Post } from '../Components/List/Post'




export function Home() {
    const [receive, setReceive] = useState('')
    return (
        <div className={styles.Container}>
            <InputText setDatas={setReceive} />
            <div className={styles.emptyContainer}>
                <div className={styles.Box}>
                    <div className={styles.Titulo}>
                        <h5>Tarefas criadas <span>0</span> </h5>
                        <p>Concluídas <span>0</span></p>
                    </div>
                    <Empty />
                    <Post datas={receive} />
                </div>
            </div>
        </div>
    )
}