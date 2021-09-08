import Menu from './../Menu/Menu'
import styles from './Content.module.css'

const Content = () => {
    return (
        <div className={styles.content_container}>
            <Menu/>
            Hello I am content block
        </div>
    )
}

export default Content;