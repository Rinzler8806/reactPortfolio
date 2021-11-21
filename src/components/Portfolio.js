import React from "react";
import prw from "../images/prw.png";
import cryptotracker from "../images/cryptotracker.png";
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
    <p> Description:
      User can search restaurants around the world based on location and food type.
      User searched cities are saved to local storage and can be accessed via the navbar.
      When user inputs a location and food type the page will scroll to an embedded map with markers displaying local restaurants that meet search criteria.
      When user clicks on map marker info about the restaurant will be displayed as well as a get directions link
      <br></br>
      Tools: Javascript, Zomato API, Foundation CSS framework, and Google API's to retrieve restaurant data.
    </p>
    <b>Demo:</b> <a href className="hyper-link" onClick={() => window.open("https://wattierdan.github.io/Popular-Restaurants-of-the-World/", "_blank")}>https://wattierdan.github.io/Popular-Restaurants-of-the-World/</a>
    <br></br>
    <b>GitHub:</b> <a href className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/Popular-Restaurants-of-the-World-1")}>https://github.com/Rinzler8806/Popular-Restaurants-of-the-World-1</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Popular Restaurants of the World",
        },
      },
    });
  }
  const popupboxConfigProw = {
    titleBar: {
      enable: true,
      text: "Popular Restaurants of the World"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  //CryptoTracker

  const openPopupboxCryptotracker = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={cryptotracker} alt="cryptotracker"/>
    <p> Description:
    An app created using a React framework to display and allow the user to search different crypto currencies. 
    The fields displayed are the following for each coin: name, image, symbol, price, volume, priceChange, and marketcap. 
    The price change will reflect whether the price has recently increased or decreased based on the color (red = down, green = up).
      <br></br>
      Tools: React Hooks, Axios, and coingecko API (https://www.coingecko.com).
    </p>
    <b>Demo:</b> <a href className="hyper-link" onClick={() => window.open("https://crypto-price-tracker916.herokuapp.com/", "_blank")}>https://crypto-price-tracker916.herokuapp.com/</a>
    <br></br>
    <b>GitHub:</b> <a href className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/crypto-price-tracker")}>https://github.com/Rinzler8806/crypto-price-tracker</a>
    </>
    )
    PopupboxManager.open({ content })
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Crypto Price Tracker",
        },
      },
    });
  }

  const popupboxConfigCryptotracker = {
    titleBar: {
      enable: true,
      text: "Crypto Price Tracker"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };



  //fitnesstracker
  const openPopupboxFitnesstracker = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={fitnesstracker} alt="fitnesstracker"/>
    <p>
<br></br>
<br></br>
This app has been created with the intention to be able to view create and track daily workouts. The user will be able to log multiple exercises in a workout on a given day.
 The user will also be able to track the name, type, weight, sets, reps, and duration of exercise.
  If the exercise is a cardio exercise, the user will be able to track their distance traveled.
  <br></br>
  Tools: Express, MongoDB, NodeJS, Mongoose
    </p>
    <b>Demo: </b> <a href className="hyper-link" onClick={() => window.open("https://fitnesstracker808.herokuapp.com/exercise?id=60b84fdcf99be00015ab65f6", "_blank")}>https://fitnesstracker808.herokuapp.com/exercise?id=60b84fdcf99be00015ab65f6</a>
    <br></br>
    <b>GitHub: </b> <a href className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/fitnessTracker")}>https://github.com/Rinzler8806/fitnessTracker</a>
    </>
    )
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Fitness Tracker",
        },
      },
    });
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
    <p>
<br></br>
<br></br>
The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
<br></br>
Offline Functionality:
Enter deposits offline.
Enter expenses offline.
When brought back online:
Offline entries should be added to tracker.
<br></br>
Tools: HTML, CSS, JavaScript, Bootstrap, Service-Worker, Mongoose
    </p>
    <b>Demo: </b> <a href className="hyper-link" onClick={() => window.open("https://budgettracker916.herokuapp.com/", "_blank")}>https://budgettracker916.herokuapp.com/</a>
    <br></br>
    <b>GitHub: </b> <a href className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/BudgetTracker")}>https://github.com/Rinzler8806/BudgetTracker</a>
    </>
    )
    PopupboxManager.open({content});
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Budget Tracker",
        },
      },
    });
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
  <br></br>
  Tools: Node.js, Axios, Chat Engine API, React, React-Bootstrap, Chat Engine UI, Libre Translate API
      </p>
      <b>Demo: </b> <a href className="hyper-link" onClick={() => window.open("https://pangeachat.herokuapp.com/", "_blank")}>https://pangeachat.herokuapp.com/</a>
      <br></br>
      <b>GitHub: </b> <a href className="hyper-link" onClick={() => window.open("https://github.com/Rinzler8806/Pangea")}>https://github.com/Rinzler8806/Pangea</a>
      </>
      )
      PopupboxManager.open({content});
      PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Pangea",
          },
        },
      });
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
    <div id="Portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxProw}>
          <img className="portfolio-image" src={prw} alt="prw" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="portfolio-image-box" onClick={openPopupboxCryptotracker}>
          <img className="portfolio-image" src={cryptotracker} alt="cryptotracker" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="portfolio-image-box" onClick={openPopupboxFitnesstracker}>
          <img className="portfolio-image" src={fitnesstracker} alt="fitnesstracker" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="portfolio-image-box" onClick={openPopupboxBudgettracker}>
          <img className="portfolio-image" src={budgettracker} alt="budgettracker" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        {/* - */}
        <div className="portfolio-image-box" onClick={openPopupboxPangea}>
          <img className="portfolio-image" src={pangea} alt="pangea" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        </div>
        <PopupboxContainer {...popupboxConfigProw} />
        <PopupboxContainer {...popupboxConfigCryptotracker} />
        <PopupboxContainer {...popupboxConfigFitnesstracker} />
        <PopupboxContainer {...popupboxConfigBudgettracker} />
        <PopupboxContainer {...popupboxConfigPangea} />
        </div> 
  )
}

export default Portfolio;