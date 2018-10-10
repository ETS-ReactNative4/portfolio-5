import React, {Component} from 'react'
import './portfolio.css'
import SimpleSlider from '../Slider/Slider'

export default function Portfolio(props){
    return(
        <div>
            <div className="title">
                <p>Portfolio</p>
            </div>

            <div id="portfolio-main">
                
                <div >
                    {/* group */}
                    <iframe  src="https://www.youtube.com/embed/wvbdKwsP6nk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                
                <div id="bottom-video">
                    {/* personal */}
                    <iframe  src="https://www.youtube.com/embed/vPa3lJnDk6k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>


              
            
            </div>

            
            {/* <div id="slider">
                <SimpleSlider />
            </div> */}
            


        </div>
    )
}