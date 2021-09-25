import styles from './Profile.module.css'
import PhoneBlock from './PhoneBlock/PhoneBlock'

const Profile = () => {
    return (
        <div className={styles.container}>
            <PhoneBlock/>
        </div>
    )
}

export default Profile;