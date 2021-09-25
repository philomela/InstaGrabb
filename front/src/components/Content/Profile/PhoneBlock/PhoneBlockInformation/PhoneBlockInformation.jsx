import styles from './PhoneBlockInformation.module.css'

const PhoneBlockInformation = (props) => {
    return (
        <div className={styles.container}>
                <div className={styles.usernameBlock}>
                    <p className={styles.usernameTitle}>Username:</p>
                    <p className={styles.username}>{props.state.username}</p> 
                </div>

                <div className={styles.informationBlock}>
                    <p className={styles.subscribers}>Subscribers: <b>{props.state.subscribers}</b></p>
                    <p className={styles.subscriptions}>Subscriptions: <b>{props.state.subscriptions}</b></p>
                    
                </div>
            {/*<div className={styles.avatarBlock}>
                <img class={styles.avatarImage} width="150px" src="images/avatar.jpg" alt=""/>
            </div>*/}
        </div>
    )
}

export default PhoneBlockInformation;