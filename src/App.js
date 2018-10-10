import React, { Component } from 'react';
import './reset.css';
import './App.css';
// import './home.css'
import routes from './routes'
import {Link} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import SimpleSlider from './components/Slider/Slider'


class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="shortcut icon" type="image/png" href="./favicon.png"></link>



        <Header />
       
        
          {routes}
        <Footer />
        

        
      </div>
    );
  }
}

export default App;
