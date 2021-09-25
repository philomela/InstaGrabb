import { NavLink } from 'react-router-dom';
import styles from './MenuItems.module.css'

const MenuItems = () => {
    return (
        <div className={styles.menu_items_container}>
            <ul>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/mystatistics">MyStatistics</NavLink></li>
                <li><NavLink to="/documentation">Documentation</NavLink></li>
                <li><NavLink to="/about">AboutProject</NavLink></li>
            </ul>
        </div>
    )
}

export default MenuItems;