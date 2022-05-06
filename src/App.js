import logo from './logo.svg';
import './App.css';
import {Checkout} from './components/CheckOut';
import Navbar from './components/Navbar';
import {BrowserRouter} from "react-router-dom";
import Footer  from './components/Footer';
import LeftBar from './components/LeftBar';


function App() {
  return (
    <div className="App">
   
    <Home />
      <Checkout/>
    <Navbar/>

    <LeftBar/>
    <Footer/>
    
    </div>
  );
}

export default App;
