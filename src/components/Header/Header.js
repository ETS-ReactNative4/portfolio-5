



import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component{

    state = {
        menuShown: false
    }


    onResize = () => {
        if(window.innerWidth >= 700 && this.state.menuShown) {
            this.closeMenu()
        }
    }

    showMenu = () => {
        if(!this.state.menuShown) {
            window.addEventListener('resize', this.onResize)
            this.setState({menuShown: true})
        } else {
            this.closeMenu()
        }
    }

    closeMenu = () => {
        window.removeEventListener('resize', this.onResize)
        this.setState({menuShown: false})
    }

    render(){
        return(
            <div id="header">
    
                <div id="header-left">
                    <Link to="/"><button>RUSS<span className="ell">ELL</span> <span className="memory">MEMORY</span></button></Link>
                </div>
    
                <div id="header-right">
    
                    
                            <div id="header-home"><Link to="/"><button>Home</button></Link></div>
                            <div id="header-portfolio"><Link to="/portfolio"><button>Portfolio</button></Link></div>
                            <div id="header-about"><Link to="/about"><button>About <span>Me</span></button></Link></div>
                    
    
                    
                </div>
                {/* <div id="header-right">
                    <label onClick={this.showMenu} for="toggle">&#9776;</label>
    
                    {
                        (this.state.menuShown || window.innerWidth > 700) &&
                        <div className="menu">
                            <div id="header-home"><Link to="/"><button>Home</button></Link></div>
                            <div id="header-portfolio"><Link to="/portfolio"><button>Portfolio</button></Link></div>
                            <div id="header-about"><Link to="/about"><button>About Me</button></Link></div>
                        </div>
                    }
    
                    
                </div> */}
    
            </div>
        )
    }
}








