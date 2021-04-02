import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="Home" className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Design</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Development", "Web Design", "Solutions to a digital world"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
