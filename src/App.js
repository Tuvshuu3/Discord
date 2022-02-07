import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";          
import { Container, Navbar, Button, Nav, Carousel, Dropdown  } from "react-bootstrap";
import LogoNname from "./assets/LogoNname.svg"
import Background2 from "./assets/Background2.svg"
import Background3 from "./assets/Background3.svg"
import Carousel1 from './assets/Carousel1.png'
import Carousel2 from './assets/Carousel2.png'
import Carousel3 from './assets/Carousel3.png'
import 'material-icons/iconfont/material-icons.css';
import SocialMedia from './assets/Socialmedia.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home.js'


const App = () => {
  return(
  <Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
</Router>)
};

export default App;