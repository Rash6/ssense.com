// import logo from './logo.svg';
import './App.css';
// r...
import {Link} from "react-router-dom"
import { Login } from './components/login/login'
import {Register} from "./components/register/register"
import { Routes, Route } from "react-router-dom";
// r...



function App() {
  return (
    <div className="App">
   
    {/* <Home />
      <Checkout/>
    <Navbar/>

    <LeftBar/>
    <Footer/> */}
    <Link className="nav-login" to="/login">
        Login
        </Link>
   
    <Routes>
<Route path="/login" element={<Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
