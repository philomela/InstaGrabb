import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';


const App = (props) => {
  return (
   
    <div className="App">
      
      <div className="app-wrapper">
      <BrowserRouter>
        <Header/>
        <Content state={props.state.content}/>  
        {console.log(props.state.content)}    
        <Footer/>
        </BrowserRouter>
      </div>
     
    </div>
    
  );
}

export default App;
