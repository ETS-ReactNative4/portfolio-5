



import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function Header(props){
    return(
        <div id="header">

            <div id="header-left">
                <Link to="/"><button>RUSSELL MEMORY</button></Link>
            </div>

            <div id="header-right">
                <label for="toggle">&#9776;</label>
                <input type="checkbox" id="toggle"/>

                <div class="menu">
                    <div id="header-home"><Link to="/"><button>Home</button></Link></div>
                    <div id="header-portfolio"><Link to="/portfolio"><button>Portfolio</button></Link></div>
                    <div id="header-about"><Link to="/about"><button>About Me</button></Link></div>
                </div>
            </div>

        </div>
    )
}








