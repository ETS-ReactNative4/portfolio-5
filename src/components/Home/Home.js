import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import front from './frontend.png'
import back from './backend.png'
import css from './CSS3.png'
import express from './Expressjs.png'
import git from './Git.png'
import html from './HTML5.png'
import js from './JavaScript.png'
import jest from './Jest.png'
import node from './nodejs.png'
import postgres from './PostgreSQL.png'
import postman from './Postman.png'
import react from './React.png'
import redux from './Redux.png'
import restful from './RESTful.png'

export default function Home(props){
    return(
        <div id="home">

          
        <div id="main">
          <div id="main-message">
            <h1>Hi, I'm Russell Memory.</h1>
            <h4>I'm a full-stack web developer.</h4>
            <Link to="/portfolio"><button id="my-work">My Portfolio</button></Link>
          </div>

        </div>

        <div id="skills">
          <div id="skills-title">
            <p>Here's what I do:</p>
          </div>

          <div id="skills-body">

              

              <div id="skills-left">

                <div id="skills-left-pic">
                  <img id="front" src={front}/>
                </div>

                <p>Front-End Technologies</p>
                <div id="front-tech">My front-end skillset includes HTML, CSS, JavaScript, React and Redux. I have experience with Angular as well. </div>

                <div id="front-end-pics">
                  <img src={css}/>
                  <img src={js}/>
                  <img src={react}/>
                  <img src={redux}/>
                  <img src={html}/>
                  <img src={git}/>
                </div>
              </div>

              <div id="skills-right">
                <div id="skills-right-pic">
                  <img id="back" src={back}/>
                </div>

                <p>Back-End Technologies</p>
                <div id="back-tech">For the backend I use NodeJS, Express, and PostgreSQL. </div>

                <div id="back-end-pics">
                  <img src={express}/>
                  <img src={jest}/>
                  <img src={node}/>
                  <img src={postgres}/>
                  <img src={postman}/>
                  <img src={restful}/>
                </div>
              </div>

            </div>

        </div>

          <div id="portfolio">
          
            <div id="portfolio-container">
                <div id="portfolio-left">
                  <div id="portfolio-title">
                    Portfolio
                  </div>
                  <div id="portfolio-body">
                    <p>I enjoy making ecommerce applications, but I enjoy collaborating on 
                    almost any kind of project. You’ll find a little bit of everything in my portfolio.</p>
                  </div>
                  <div id="portfolio-button">
                      <Link to="/portfolio"><button>VIEW MY WORK</button></Link>
                  </div>
                </div>


                <div id="portfolio-right">
                  <p>Portoflio pictures</p>
                </div>

            
            </div>
          </div>

          <footer>
            <div id="footer-container">
              <button>Linkedin</button>
              <button>Github</button>
            </div>
          </footer>




        </div>
    )
}