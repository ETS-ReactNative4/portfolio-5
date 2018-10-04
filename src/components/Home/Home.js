import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './home.css'

export default function Home(props){
    return(
        <div>

          
        <div id="main">
          <div id="main-message">
            <h1>Hi, I'm Russell Memory</h1>
            <h4>I'm a full-stack web developer</h4>
            <Link to="/portfolio"><button id="portfolio-button">My Portfolio</button></Link>
          </div>

        </div>

        <div id="skills">
          <div id="skills-title">
            <p>What I can do:</p>
          </div>

          <div id="skills-body">

              <div id="skills-left">
                <p>Front-End Technologies</p>
                <div id="front-tech">This is some filler text</div>
              </div>

              <div id="skills-right">
                <p>Back-End Technologies</p>
                <div id="back-tech">This is some filler text</div>
              </div>

            </div>

          <div id="technologies">
            {/* <img src="./images/git.png"/> */}
          </div>

        </div>

          <div id="portfolio">
            {/* <img src="./images/git.png"/> */}
          </div>




        </div>
    )
}