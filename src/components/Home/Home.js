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
import cypress from './Cypress.png'
import endpoint from './endpoint.png'
import personal from './personal.png'
import group from './group.png'



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

          {/* left */}
          <div className="skills-column">
            <div className="skills-logo">
              <img src={front} alt=""/>
            </div>
            <div className="skills-type">
              <p>Front-End Technologies</p>
            </div>

            <div className="skills-logos">
              <div className="skills-logos-top">
                <div className="block">
                    <img src={css}/>
                    <p>CSS</p>
                  </div>
                  <div className="block">
                    <img src={js}/>
                    <p>JavaScript</p>
                  </div>
                  <div className="block">
                    <img src={react}/>
                    <p>React</p>
                  </div>

              </div>
              <div className="skills-logos-bottom">
                  <div className="block">
                    <img src={redux}/>
                    <p>Redux</p>
                  </div>

                  <div className="block">
                    <img src={html}/>
                    <p>HTML</p>
                  </div>

                  

              </div>
            </div>

          </div>

            {/* middle */}
             <div className="skills-column middle">
            <div className="skills-logo">
              <img src={back} alt=""/>
            </div>
            <div className="skills-type">
              <p>Back-End Technologies</p>
            </div>

            <div className="skills-logos">
              <div className="skills-logos-top">
              <div className="block">
                    <img src={node}/>
                    <p>NodeJS</p>
                  </div>
                  <div className="block">
                    <img src={express}/>
                    <p>Express</p>
                  </div>
                  <div className="block">
                    <img src={postgres}/>
                    <p>Postgres</p>
                  </div>

              </div>
              <div className="skills-logos-bottom">
                  <div className="block">
                    <img src={restful}/>
                    <p>Rest</p>
                  </div>

                  <div className="block">
                    <img src={git}/>
                    <p>Git</p>
                  </div>
              </div>
            </div>

          </div>

            {/* right */}
             <div className="skills-column right">
            <div className="skills-logo">
              <img src={endpoint} alt=""/>
            </div>
            <div className="skills-type">
              <p>Unit & Endpoint Testing</p>
            </div>

            <div className="skills-logos">
              <div className="skills-logos-top">
                  <div className="block">
                    <img src={postman}/>
                    <p>Postman</p>
                  </div>
                  <div className="block">
                    <img src={jest}/>
                    <p>Jest</p>
                  </div>

                  <div className="block">
                    <img src={cypress}/>
                    <p>Cypress</p>
                  </div>
                  

              </div>
              <div className="skills-logos-bottom">
                  

              </div>
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
                  <img src={personal} alt=""/>
                  <img src={group} alt=""/>
                </div>

            
            </div>
          </div>

    

        </div>
    )
}