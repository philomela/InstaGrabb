import Menu from './../Menu/Menu'
import styles from './Content.module.css'
import axios from 'axios';
import Profile from './Profile/Profile';
import MyStatistics from './MyStatistics/MyStatistics';
import Route from 'react-router-dom/Route';

const Content = () => {
    return (
        <div className={styles.content_container}>
            <Menu/>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/mystatistic' component={MyStatistics}></Route>
            
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