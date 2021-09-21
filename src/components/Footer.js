import React from 'react';
import {Link} from "react-scroll";
import {
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            Sacramento, California, USA
                        </div>
                        <div className="d-flex">
                            <a href="tel:916-396-6332">+1(916)396-6332</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:Shane.Rogers916@gmail.com">Shane.Rogers916@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                            {/* <ul className="navbar-nav ml-auto"> */}
                    <li className="footer-nav active">
                        <Link smooth={true} to="Home" className="footer-nav" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="footer-nav">
                        <Link smooth={true} to="About" offset={-200} className="footer-nav" href="#">About</Link>
                        </li>
                        <li className="footer-nav">
                        <Link smooth={true} to="Experience" offset={-200} className="footer-nav" href="#">Experience</Link>
                        </li>
                        <li className="footer-nav">
                        <Link smooth={true} to="Portfolio" offset={-200} className="footer-nav" href="#">Portfolio</Link>
                        </li>
                        <li className="footer-nav">
                        <Link smooth={true} to="Contacts" offset={-200} className="footer-nav" href="#">Contact</Link>
                    </li>
                {/* </ul> */}
                </div>                            
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-s-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LinkedinShareButton
                            url={"https://www.linkedin.com/in/shanerogers916/"}
                            quote={"FullStack Developer"}
                            hashtag="#javascript"
                            >
                                <LinkedinIcon className="mx-3" size={50}/>
                            </LinkedinShareButton>
                        </div>
                        <div className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;Shane's Portfolio | All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;