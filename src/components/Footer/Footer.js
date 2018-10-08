import React, {Component} from 'react'
import github from '../Home/github.png'
import linkedin from '../Home/linkedin.png'

export default function Footer(props){
    return(
        <footer>
            <div id="footer-container">
            <form action="https://www.linkedin.com/in/russellmemory/">
              <button><img src={linkedin}/></button>
            </form>

            <form action="https://github.com/rgmemory">
              <button><img src={github}/></button>
            </form>
            </div>
          </footer>
    )
}