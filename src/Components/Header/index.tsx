import styles from './Header.module.css'
import logo from '../../assets/logoHeader.png'




export function Header() {
    return (
        <div className={styles.headerContainer}>
            <img src={logo} alt="logo header" />
        </div>
    )
}