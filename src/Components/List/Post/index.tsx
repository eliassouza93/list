// src/components/List/Post.tsx
import styles from './Post.module.css'
import lixeira from '../../../assets/lixeira.png'
import { useCompleted } from '../../../ContextAPI'

interface PostType {
  datas: string[]
}

export function Post({ datas }: PostType) {
  const { removeItem, incrementCompletedCount, completedItems } = useCompleted()

  const handleCircleClick = (index: number) => {
    incrementCompletedCount(index)
  }

  const handleRemoveClick = (index: number) => {
    removeItem(index)
  }

  return (
    <div className={styles.PostContainer}>
      {datas.map((dado, index) => (
        <div key={index} className={styles.BoxContainer}>
          <span
            onClick={() => handleCircleClick(index)}
            className={`${styles.Circle} ${completedItems.includes(index) ? styles.CircleCompleted : ''}`}
          >
            {completedItems.includes(index) ? '✓' : ''}
          </span>
          <p className={`${styles.postParagraph} ${completedItems.includes(index) ? styles.postParagraphCompleted : ''}`}>
            {dado}
            <img onClick={() => handleRemoveClick(index)} src={lixeira} alt="Remover" />
          </p>
        </div>
      ))}
    </div>
  )
}