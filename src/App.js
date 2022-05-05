//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter} from "react-router-dom";
import Footer  from './components/Footer/Footer';
import LeftBar from './components/SideBar/LeftBar';
// import RightBar from './components/RightBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
    <Navbar/>  
    <LeftBar/>
    <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
