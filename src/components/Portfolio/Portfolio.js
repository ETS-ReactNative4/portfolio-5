import React, { Component } from "react";
import "./portfolio.css";
import trucksHome from "../../images/trucksHome.png";
import nikeClone from "../../images/nikeClone.png";
import typeTrainer from "../Home/group.png";
import tricalc from "../../images/tricalc.png";
import houser from "../../images/houser.png";

export default function Portfolio(props) {
  return (
    <div>
      <div className="title">
        <p>Portfolio</p>
      </div>

      <div id="portfolio-main">
        {/* trucks */}
        <div className="portfolio-piece">
          <div className="portfolio-name">
            <p>Shipping Manager</p>
          </div>
          <div className="portfolio-piece-body">
            <div className="portfolio-piece-left">
              <div className="portfolio-screenshot">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://trucks.russellmemory.com"
                >
                  <img src={trucksHome} alt="" />
                </a>
              </div>
            </div>

            <div className="portfilio-piece-right">
              <div className="portfolio-github">
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rgmemory/trucks"
                >
                  github.com/rgmemory/trucks
                </a>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://trucks.russellmemory.com"
                >
                  trucks.russellmemory.com
                </a>
              </div>
              <div className="portfolio-description">
                <p>
                  This app is used for managing the drivers of a trucking
                  company. It provides a breakdown of the company finances, a
                  to-do list, a weather station, an interface to dispatch a
                  driver, and also allows the user to pay drivers.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                  On the home page I use ChartJS for the finances, and I hit the
                  openweathermap.org API for the weather data. The driver chart
                  uses Material-UI and the dispatch tool keeps track of the job
                  data using React/Redux. An email is sent to the driver email
                  on file using NodeMailer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* tricalc */}
        <div className="portfolio-piece">
          <div className="portfolio-name">
            <p>Triathlon Calculator</p>
          </div>
          <div className="portfolio-piece-body">
            <div className="portfolio-piece-left">
              <div className="portfolio-screenshot">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tricalc.russellmemory.com"
                >
                  <img src={tricalc} alt="" />
                </a>

                
              </div>
            </div>

            <div className="portfilio-piece-right">
              <div className="portfolio-github">
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rgmemory/tricalc"
                >
                  github.com/rgmemory/tricalc
                </a>

                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tricalc.russellmemory.com"
                >
                  tricalc.russellmemory.com
                </a>
              </div>
              <div className="portfolio-description">
                <p>
                  This is an app to help triathletes predict their race time. It
                  uses sliders to set their race distance and paces and it
                  outputs the split for each individual event as well as a clock
                  to let the athlete know how their overall time at each
                  checkpoint in the race.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                  This app is built with HTML, CSS, and ReactJS. I have plans to
                  further expand the functionaility by adding a backend to help
                  keep track of workouts and personal bests.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* houser */}
        <div className="portfolio-piece">
          <div className="portfolio-name">
            <p>Houser</p>
          </div>
          <div className="portfolio-piece-body">
            <div className="portfolio-piece-left">
              <div className="portfolio-screenshot">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://houser.russellmemory.com"
                >
                  <img src={houser} alt="" />
                </a>
              </div>
            </div>

            <div className="portfilio-piece-right">
              <div className="portfolio-github">
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rgmemory/houser"
                >
                  github.com/rgmemory/houser
                </a>

                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://houser.russellmemory.com"
                >
                  houser.russellmemory.com
                </a>
              </div>
              <div className="portfolio-description">
                <p>
                  This app allows the user to list a property for rent. It
                  allows the user to specify the relevant property information
                  and then it recommends an appropriate rent amount.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                  HTML, CSS, ReactJS, React Redux, Express, Express Sessions,
                  Node, and SQL were used in this app. When the user creates an
                  account, their username and password are stored in the
                  database and a session is used to keep track of their property
                  listings. Redux is used to keep track of the property
                  information as the user proceeds from page to page and then
                  it's submitted to the database when it is complete. The
                  properties are stored in the SQL database using a one-to-many
                  relationship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* nikeclone */}
        <div className="portfolio-piece">
          <div className="portfolio-name">
            <p>Nike.com Clone</p>
          </div>
          <div className="portfolio-piece-body">
            <div className="portfolio-piece-left">
              <div className="portfolio-screenshot">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/embed/vPa3lJnDk6k"
                >
                  <img src={nikeClone} alt="" />
                </a>
              </div>
            </div>

            <div className="portfilio-piece-right">
              <div className="portfolio-github">
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rgmemory/pp2"
                >
                  github.com/rgmemory/pp2
                </a>

                {/* <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://trucks.russellmemory.com"
                >
                  trucks.russellmemory.com
                </a> */}
              </div>
              <div className="portfolio-description">
                <p>
                  This site is a clone of Nike.com. It displays shoes for
                  purchase and allows the customer to select a style, add it to
                  the cart and either continue shopping or proceed to the
                  checkout. In the checkout they can complete the order.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                  This website uses Auth 0, React, Redux, Node, Express, and
                  PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* typing tutor */}
        <div className="portfolio-piece">
          <div className="portfolio-name">
            <p>Typing Tutor</p>
          </div>
          <div className="portfolio-piece-body">
            <div className="portfolio-piece-left">
              <div className="portfolio-screenshot">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/embed/wvbdKwsP6nk"
                >
                  <img src={typeTrainer} alt="" />
                </a>
              </div>
            </div>

            <div className="portfilio-piece-right">
              <div className="portfolio-github">
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/rgmemory/type-trainer"
                >
                  github.com/rgmemory/type-trainer
                </a>

                {/* <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://trucks.russellmemory.com"
                >
                  trucks.russellmemory.com
                </a> */}
              </div>
              <div className="portfolio-description">
                <p>
                  This App allows the user to test how fast they can type.
                  Specifically it tests how fast they can type code. It will
                  present HTML, JavaScript, etc for the typing challenge and it
                  keeps track of the accuracy and words per minute. After the
                  test is complete it displays charts showing how the user fared
                  as the test progressed. It allows the user to login and save
                  their results for future comparison.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                  This website uses OAuth, React, Redux, Node, Express, and
                  PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
