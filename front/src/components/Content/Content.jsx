import Menu from './../Menu/Menu'
import styles from './Content.module.css'
import axios from 'axios';
import Profile from './Profile/Profile';
import MyStatistics from './MyStatistics/MyStatistics';
import Route from 'react-router-dom/Route';

const Content = (props) => {
    return (
        <div className={styles.content_container}>
            <Menu/>
            <Route path='/profile' 
                   render={ () => <Profile state={props.state.profile}/>}></Route>
            <Route path='/mystatistic' render={MyStatistics}></Route>
            
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