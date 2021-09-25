import styles from './PhoneBlock.module.css'
import PhoneBlockInfromation from './PhoneBlockInformation/PhoneBlockInformation'

const PhoneBlock = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.phone}>
                <PhoneBlockInfromation state={props.state.phoneBlockInformation}/>
            </div>
        </div>
    )
}

export default PhoneBlock;