



import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default function Header(props){
    return(
        <div id="header">

            {/* <div class="header">
                <div class="header-left">
                    <Link to="/"><button>RUSSELL MEMORY</button></Link>
                </div>
            </div> */}

            <div id="header-left">
                <Link to="/"><button>RUSSELL MEMORY</button></Link>
            </div>

            {/* <div id="header"></div> */}

            

            <div class="cell" id="header-right">
                <div class="cell" id="header-home"><Link to="/"><button>Home</button></Link></div>
                <div class="cell" id="header-portfolio"><Link to="/portfolio"><button>Portfolio</button></Link></div>
                <div class="cell" id="header-about"><Link to="/about"><button>About Me</button></Link></div>
            </div>

        </div>
    )
}








