import styles from './Post.module.css'


interface PostType {
  datas: string[] // Altere a interface para indicar que 'datas' é um array de strings
}

export function Post({ datas }: PostType) {
  return (
    <div className={styles.postContainer}> {/* Aplique estilos, se necessário */}
      {datas.map((dado, index) => (
        <p key={index} className={styles.postParagraph}> {/* Aplique estilos, se necessário */}
          {dado}
        </p>
      ))}
    </div>
  )
}
