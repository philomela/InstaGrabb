import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
   
    <div className="App">
      
      <div className="app-wrapper">
      <BrowserRouter>
        <Header/>
        <Content/>      
        <Footer/>
        </BrowserRouter>
      </div>
     
    </div>
    
  );
}

export default App;
