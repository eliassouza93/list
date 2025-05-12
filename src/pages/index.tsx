 
import { InputText } from '../Components/InputText'
import { Empty } from '../Components/List/Empty'
import styles from './Pages.module.css'
import { Post } from '../Components/List/Post'
import { useCompleted } from '../ContextAPI'
 


export function Home() {
  const { datas, addItem, completedCount } = useCompleted()

  return (
    <div className={styles.Container}>
      <InputText setDatas={addItem} />
      <div className={styles.emptyContainer}>
        <div className={styles.Box}>
          <div className={styles.Titulo}>
            <h5>
              Tarefas criadas <span> {datas.length} </span>
            </h5>
            <p>
              Concluídas <span> {completedCount} </span>
            </p>
          </div>
          {datas.length === 0 ? <Empty /> : <Post datas={datas} />}
        </div>
      </div>
    </div>
  )
}