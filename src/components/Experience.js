import React from "react";
// import resume from "../images/Rogers_ShaneResume_05"

const Experience = () => {
  return (
    <div id="Experience" className="experience">
      <div className="d-flex justify-content-center my-5">
      <h1>Experience</h1>
    </div>
    <div className="d-flex justify-content-center my-5">
    <a href="https://drive.google.com/file/d/1OcUqMbDZ0OtgAnNS7iGPEJDAuLoEqsJY/view?usp=sharing" download className="btn-main-offer-experience">Download Resume</a>
    </div>
    <div className="container experience-wrapper">
      <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2014-2019</h3>
            <p>State Street
              <br></br>
              <br></br>
              ●	Coordinated onshore and offshore teams to facilitate resolutions and present results to management.
              <br></br>
              ●	Investigated exceptions and problems affecting accounting records or prices.
              <br></br>
              ●	Helped to reduce risk to clients and improve efficiency through various projects.
              <br></br>
              ●	Worked directly with clients to reduce risk and improve efficiency through various projects.
              <br></br>
              ●	Composed daily and weekly reports to senior management on fund activities and other operational issues.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2019-2020</h3>
            <p>Balfour Beatty
              <br></br>
              <br></br>
              ●	Preparation, maintenance, and implementation of various document control entities such as daily reports, material procurement logs, submittal logs, as-builts, testing and inspection logs, RFI logs, and change order logs.
              <br></br>
              ●	Understanding, drafting, and enforcement of contracts, which saved the company over $200,000.
              <br></br>
              ●	Implemented policies and managed the successful execution of projects with values over $100 million.
              <br></br>
              ●	Managed various scopes of work from numerous subcontractors to ensure the schedule and budget was met.
            </p>
          </div>
        </div>
                  {/* - */}
        <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2020-2021</h3>
            <p>ITS Solutions
              <br></br>
              <br></br>
              ●	Successfully implemented new technologies and trained staff resulting in increased efficiency by over 60%, which empowered the company to bid more jobs.
              <br></br>
              ●	Accurately composed hundreds of daily field reports which were sent to the California Department of the State Architect for review.
              <br></br>
              ●	Managed and scheduled field special inspectors to facilitate accurate testing per the California building code.
              <br></br>
              ●	Meticulously reviewed the contract documents to ensure compliance with the standards specified in the California Building Code.
            </p>
          </div>
      </div>
                  {/* - */}
        <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>2020-2021</h3>
            <p>UC Davis Full Stack Coding Bootcamp
              <br></br>
              <br></br>
              ●	Project-focused web developer with experience conducting research and collaborating with developers to create useful, interesting, and efficient web applications.
              <br></br>
              ●	Developed a real-time chat messenger app (Pangea) that utilizes a translation API, allowing users to chat in a different language, without having any actual knowledge of speaking the selected language.
              <br></br>
              ●	Created an interactive search app (Popular Restaurants of the World) that allows users to search for restaurants around the world based on location and food type.
              <br></br>
              ●	Built a useful app (Fitness Tracker) for creating and tracking daily workouts.
            </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Experience;