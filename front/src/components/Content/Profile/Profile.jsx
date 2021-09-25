import styles from './Profile.module.css'
import PhoneBlock from './PhoneBlock/PhoneBlock'

const Profile = (props) => {
    return (
        <div className={styles.container}>
            <PhoneBlock state={props.state.phoneBlock}/>
            {console.log(props.state.phoneBlock)}
        </div>
    )
}

export default Profile;