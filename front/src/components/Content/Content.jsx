import Menu from './../Menu/Menu'
import styles from './Content.module.css'
import axios from 'axios';

const Content = () => {
    return (
        <div className={styles.content_container}>
            <Menu/>
            Hello I am content block
            <button className={styles.content_button} onClick={SendToApi}>Send test message to api</button>
        </div>
    )
}

const SendToApi = () => {
    axios.get('https://localhost:5001/WeatherForecast')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  

export default Content;