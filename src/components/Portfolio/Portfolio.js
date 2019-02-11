import React, { Component } from "react";
import "./portfolio.css";
import SimpleSlider from "../Slider/Slider";
import trucksHome from "../../images/trucksHome.png";
import nikeClone from "../../images/nikeClone.png";
import typeTrainer from "../Home/group.png";

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
            <p>Trucking Manager</p>
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
              <div className="portfolio-description">
                <p>
                  This app is used for managing the drivers of a trucking
                  company. It gives a breakdown of the company finances, lets
                  you keep a to-do list, lets you keep an eye on weather
                  conditions, gives you an interface to dispatch a driver, and also allows
                  the user to pay drivers.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                  On the home page I used chartJS for the finances, and I hit
                  the openweathermap.org API for the weather data. The drivers
                  chart uses Material-UI and the dispatch tool keeps track of
                  the job data using React/Redux and the email is sent using
                  NodeMailer.
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
              <div className="portfolio-description">
                <p>
                  This site is a clone of Nike.com. It displays shoes for purchase and allows
                  the customer to select a style, add it to the cart and either continue shopping
                  or proceed to the checkout. In the checkout they can complete the order.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                  This website uses Auth 0, React, Redux, Node, Express, and PostgreSQL
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
              <div className="portfolio-description">
                <p>
                  This App allows the user to test how fast they can type. Specifically it tests
                  how fast they can type code. It will present HTML, JavaScript, etc for the typing challenge
                  and it keeps track of the accuracy and words per minute.
                  After the test is complete it displays charts showing how the user fared as the test
                  progressed. It allows you to login and save your results for future comparison.
                </p>
              </div>

              <div className="portfolio-technologies">
                <p>
                This website uses OAuth, React, Redux, Node, Express, and PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* nikeclone */}
      </div>

      {/* <div id="slider">
                <SimpleSlider />
            </div> */}
    </div>
  );
}
