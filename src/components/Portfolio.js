import React from "react";
import prw from "../images/prw.png";
import fitnesstracker from "../images/fitnesstracker.png";
import budgettracker from "../images/budgettracker.png";
import pangea from "../images/pangea.png";
//Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//React POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  //Prow
  const openPopupboxProw = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={prw} alt="prw"/>
    <p> Description of Popular Restaurants of the World
    As a traveler, I want to be able to search a location for surrounding restaurants so that I can find a local establishment to fit my needs.
<br></br>
<br></br>
      uses Foundation css framework
      application utilizes Zomato, and Google API's to retreve restaurant data
      user can search restaurants around the world based on location and food type
      user searched cities are saved to local storage and can be accessed via the navbar
      when user inputs a location and food type the page will scroll to an embedded map with markers displaying local restaurants that meet search criteria
      when user clicks on map marker info about the restaurant will be displayed as well as a get directions link
    </p>
    <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/Popular-Restaurants-of-the-World-1")}>https://github.com/Rinzler8806/Popular-Restaurants-of-the-World-1</a>
    </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfigProw = {
    titleBar: {
      enable: true,
      text: "Popular Restaurants of the World"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //fitnesstracker
  const openPopupboxFitnesstracker = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={fitnesstracker} alt="fitnesstracker"/>
    <p> Fitness Tracker
<br></br>
<br></br>
This app has been created with the intention to be able to view create and track daily workouts. The user will be able to log multiple exercises in a workout on a given day. The user will also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the user will be able to track their distance traveled.
    </p>
    <b>Demo: </b> <a className="hyper-link" onClick={() => window.open("https://infinite-beach-02354.herokuapp.com/exercise?id=6065391b3f573d0015bbd57e", "_blank")}>https://infinite-beach-02354.herokuapp.com/exercise?id=6065391b3f573d0015bbd57e</a>
    <br></br>
    <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/fitnessTracker")}>https://github.com/Rinzler8806/fitnessTracker</a>
    </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfigFitnesstracker = {
    titleBar: {
      enable: true,
      text: "Fitness Tracker"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

   //budgettracker
   const openPopupboxBudgettracker = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={budgettracker} alt="budgettracker"/>
    <p> Budget Tracker
<br></br>
<br></br>
The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
<br></br>
Offline Functionality:
<br></br>
Enter deposits offline
<br></br>
Enter expenses offline
<br></br>
When brought back online:
<br></br>
Offline entries should be added to tracker.
    </p>
    <b>Demo: </b> <a className="hyper-link" onClick={() => window.open("https://fathomless-sea-54648.herokuapp.com/", "_blank")}>https://fathomless-sea-54648.herokuapp.com/</a>
    <br></br>
    <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/BudgetTracker")}>https://github.com/Rinzler8806/BudgetTracker</a>
    </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfigBudgettracker = {
    titleBar: {
      enable: true,
      text: "Budget Tracker"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

     //Pangea
     const openPopupboxPangea = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={pangea} alt="Pangea"/>
      <p> Pangea
  <br></br>
  <br></br>
  A dynamic messaging application that connects users around the globe. It offers many features and the ability to actively translate your message to a selected language.
  <br></br>
  Log in as: Batman and use password: password to view demo.
      </p>
      <b>Demo: </b> <a className="hyper-link" onClick={() => window.open("https://pangeachat.herokuapp.com/", "_blank")}>https://pangeachat.herokuapp.com/</a>
      <br></br>
      <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/pangea-chat")}>https://github.com/Rinzler8806/pangea-chat</a>
      </>
      )
      PopupboxManager.open({content})
    }
  
    const popupboxConfigPangea = {
      titleBar: {
        enable: true,
        text: "Pangea"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }



  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div Classname="image-box-wrapper row justify-content-center">
          <div Classname="portfolio-image-box" onClick={openPopupboxProw}>
          <img className="portfolio-image" src={prw} alt="prw" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div Classname="portfolio-image-box" onClick={openPopupboxFitnesstracker}>
          <img className="portfolio-image" src={fitnesstracker} alt="fitnesstracker" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div Classname="portfolio-image-box" onClick={openPopupboxBudgettracker}>
          <img className="portfolio-image" src={budgettracker} alt="budgettracker" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div Classname="portfolio-image-box" onClick={openPopupboxPangea}>
          <img className="portfolio-image" src={pangea} alt="pangea" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        </div>
        <PopupboxContainer {...popupboxConfigProw} />
        <PopupboxContainer {...popupboxConfigFitnesstracker} />
        <PopupboxContainer {...popupboxConfigBudgettracker} />
        <PopupboxContainer {...popupboxConfigPangea} />
        </div> 
  )
}

export default Portfolio;