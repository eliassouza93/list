import styles from './Post.module.css'


interface PostType {
  datas: string[]  
}

export function Post({ datas }: PostType) {
  return (
    <div className={styles.postContainer}>  
      {datas.map((dado, index) => (
        <p key={index} className={styles.postParagraph}>  
          {dado}
        </p>
      ))}
    </div>
  )
}
