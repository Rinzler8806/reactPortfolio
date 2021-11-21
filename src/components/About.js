import React from "react";
import author from "../Shanehs.png";

const About = () => {
    return (
        <div id="About" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author"/>
                </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                    Hello! My name is Shane and I am a web developer from Sacramento, California, with a Bachelor of Business Administration degree in Business Management from the University of Hawaii. 
                    I began my post university life in finance, but eventually grew eager for a new challenge. 
                    I went back to school for Construction Management and became a project engineer for one of the world's largest construction companies, where I played a role in transforming the skyline of the San Francisco Bay area. 
                    <br></br>
                    <br></br>
                    While construction can be a rewarding profession, I have found myself drawn to creating in the digital space and have chosen to make a career change.
                    I believe in working hard, efficiency and being a life-long learner. I enjoy supporting and working with diverse groups of people as well as being committed to finding solutions. 
                    I feel that it is important to keep an open communication channel in order to support all team members moving in the same direction toward a common goal.
                    <br></br>
                    <br></br>
                    I am experienced in the following languages and frameworks: JavaScript, HTML5, CSS, SQL, NoSQL, MongoDB, and React.
                    <br></br>
                    <br></br>
                    Some additional tools I have utilized are API, Express, React, Node.js, Handlebars, Query, Bootstrap, Git Bash, Visual Studio Code.
                    <br></br>
                    <br></br>
                    I am currently learning how to code in Solidity as well.
                    <br></br>
                    <br></br>
                    Feel free to reach out if you would like to collaborate on any projects!
                    </p>
                </div>
            </div>
        </div>
  );
}

export default About;