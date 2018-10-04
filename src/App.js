import React, { Component } from 'react';
import './reset.css';
import './App.css';
// import './home.css'
import routes from './routes'
import {Link} from 'react-router-dom'
import Header from './components/Header/Header'

import SimpleSlider from './components/Slider/Slider'


class App extends Component {
  render() {
    return (
      <div className="App">



        <Header />
       
        
          {routes}
        
        

        {/* <div id="skills">
        Skills
          <div className="logos">

            <div className="logo-container"><div className="images img1" ></div><p>Auth0</p></div>
            <div className="logo-container"><div className="images img2" ></div><p>CSS</p></div>
            <div className="logo-container"><div className="images img3" ></div><p>Express</p></div>
            <div className="logo-container"><div className="images img4" ></div><p>Git</p></div>
            <div className="logo-container"><div className="images img5" ></div><p>HTML</p></div>
            <div className="logo-container"><div className="images img6" ></div><p>JavaScript</p></div>
            <div className="logo-container"><div className="images img7" ></div><p>SQL</p></div>
            <div className="logo-container"><div className="images img8" ></div><p>NodeJS</p></div>
            <div className="logo-container"><div className="images img9" ></div><p>Postgres</p></div>
            <div className="logo-container"><div className="images img10" ></div><p>Postman</p></div>
            <div className="logo-container"><div className="images img11" ></div><p>ReactJS</p></div>
            <div className="logo-container"><div className="images img12" ></div><p>Redux</p></div>
          
          </div>
          
        </div> */}


        {/* <div id="projects">
          <div id="personal">
            Slider
            <SimpleSlider />
            End slider
          </div>
        </div> */}


        {/* <div id="about">About
          <p></p>
        </div>         */}

        {/* <div id="contact">
        <h1>Contact</h1>
          
          <div id="inputs">
            <p>First</p>
            <input type="text"/>
            <p>Last</p>
            <input type="text"/>
            <p>Email</p>
            <input type="text"/>
            <div id="submit"><button id="submit-button">Submit</button></div>
          </div>


          
        </div> */}
        
      </div>
    );
  }
}

export default App;
