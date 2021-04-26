import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import {Link} from "react-scroll"
import Particles from "react-particles-js";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6,
            color: "#e600e6"
          }
        }
      }
    }}
    />
    <Navbar/>
    {/* <ul>
      <li>
      <Link to="/Header">Home</Link>
      </li>
      <li>
      <Link to="/About">About</Link>
      </li>
      <li>
      <Link to="/Experience">Experience</Link>
      </li>
      <li>
      <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li>
      <Link to="/Contacts">Contact</Link>
      </li>
    </ul> */}
    <Header />
    <About />
    <Experience />
    <Portfolio />
    <Contacts />
    <Footer />
    </>
    
  );
}

export default App;