import React from 'react'
import {Switch, Route} from 'react-router-dom';



import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

export default(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
    </Switch>
)