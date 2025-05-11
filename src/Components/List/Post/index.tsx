import styles from './Post.module.css'
import lixeira from '../../../assets/lixeira.png'

interface PostType {
  datas: string[]
}

export function Post({ datas }: PostType) {
  return (
    <div className={styles.PostContainer}>
      {datas.map((dado, index) => (
        <div className={styles.BoxContainer}>
          <span className={styles.Circle}>0</span>
          <p key={index} className={styles.postParagraph}>
            {dado}
            <img src={lixeira} alt="" />
          </p>
        </div>
      ))}
    </div>
  )
}
