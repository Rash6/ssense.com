import logo from "./logo.svg";
import "./App.css";
import { Menswear } from "./components/Menswear";
import { Womenswear } from "./components/Womenswear";
import { Everything } from "./components/Everything";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Checkout } from "./components/CheckOut";
import { Login } from './components/login/login'
import {Register} from "./components/register/register"
import {MenDetails}from "./components/MenDetails";
import {WomenDetails} from "./components/WomenDetails";
import {EveryDetails} from "./components/EveryDetails";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menswear" element={<Menswear />} />
        <Route path="/Womenswear" element={<Womenswear />} />
        <Route path="/Everything" element={<Everything />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/Menswear/:id" element={<MenDetails/>}></Route>
         <Route path="/Womenswear/:id" element={<WomenDetails/>}></Route>
         <Route path="/Everything/:id" element={<EveryDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
