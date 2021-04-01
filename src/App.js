import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About";
// import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Portfolio from './components/Portfolio';
// import Contact from "./components/Contact";


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
    <Header />
    <About />
    <Experience />
    <Portfolio />
    </>
    
  );
}

export default App;
