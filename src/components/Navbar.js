import React from "react"
import Logo from "../shaneLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark flex-top">
        <div className="container">
            <a className="navbar-brand" href="/"><img className="shaneLogo" src={Logo} alt="shaneLogo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to="Home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="About" offset={-200} className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link smooth={true} to="Experience" offset={-200} className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                        <Link smooth={true} to="Portfolio" offset={-200} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                        <Link smooth={true} to="Contacts" offset={-200} className="nav-link" href="#">Contact</Link>
                    </li>
                </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
