



import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function Header(props){
    return(
        <div id="header">

            <div id="header-left">
                <Link to="/"><p>Russell Memory</p></Link>
            </div>

            <div id="header-right">
            <div id="header-home"><Link to="/">Home</Link></div>
            <div id="header-portfolio"><Link to="/portfolio">Portfolio</Link></div>
            <div id="header-about"><Link to="/about">About Me</Link></div>
            </div>

        </div>
    )
}








