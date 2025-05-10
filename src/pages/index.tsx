import { useState } from 'react'
import { InputText } from '../Components/InputText'
import { Empty } from '../Components/List/Empty'
import styles from './Pages.module.css'
import { Post } from '../Components/List/Post'


export function Home() {
    const [posts, setPosts] = useState<string[]>([])
    const [cont, setCont] = useState(0)



    const handleAddPost = (newPost: string) => {
        setPosts(prevPosts => [...prevPosts, newPost])
        if (newPost.trim() !== '') {
            setCont(prevCont => prevCont + 1)
        }
    }



    return (
        <div className={styles.Container}>
            <InputText setDatas={handleAddPost} />
            <div className={styles.emptyContainer}>
                <div className={styles.Box}>
                    <div className={styles.Titulo}>
                        <h5>Tarefas criadas <span> {cont} </span> </h5>
                        <p>Concluídas <span>0</span></p>
                    </div>
                    {posts.length === 0 ? <Empty /> : <Post datas={posts} />}
                </div>
            </div>
        </div>
    )
}