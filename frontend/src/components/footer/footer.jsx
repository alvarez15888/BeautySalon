import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="/imgs/logo.png" alt="" />
            <div>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/'}>Homepage</Link>
                    <Link className={styles.link} to={'/colabs'}>Colaborators</Link>
                    <Link className={styles.link} to={'/profile'}>Profile</Link>
                </div>
            </div>
            <div>
                By Rodrigo Xavier Álvarez.
                
            </div>
        </footer>
    )
}