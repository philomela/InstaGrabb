import styles from './Header.module.css'
import Logo from './Logo/Logo'

const Header = () => {
    return (
        <div className={styles.header_container}>
            <Logo/>
        </div>
    )
}

export default Header;