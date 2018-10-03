import React, {Component} from 'react'
import './portfolio.css'
import SimpleSlider from '../Slider/Slider'

export default function Portfolio(props){
    return(
        <div>
            <div className="title">
                <p>Portfolio</p>
            </div>

            <p>start</p>
                <SimpleSlider />
            <p>end</p>  


        </div>
    )
}