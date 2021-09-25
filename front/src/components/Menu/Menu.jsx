import styles from './Menu.module.css'
import MenuItems from './MenuItems/MenuItems'

const Menu = () => {
    return (
        <div className={styles.menu_container}>      
                <MenuItems/>
        </div>
    )
}

export default Menu;