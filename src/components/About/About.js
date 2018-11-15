import React, {Component} from 'react'
import './about.css'
import russell from './russ.jpg'

export default function About(props){
    return(
        <div id="about">
            <div className="title">
                <p>About</p>
            
            </div>

            <div id="about-body">
                <div id="about-left">
                    <img src={russell} alt=""/>
                </div>
                <div id="about-right">
                    <div id="about-title">
                        <p>Hello, my name is Russell.</p>
                    </div>

                    <div id="about-paragraph">
                        <p>After graduating from Brigham Young University in 2008 with a degree in Exercise Science, I joined a local tech startup when it had 15 employees. I worked there for several years while it grew rapidly. It's now a multi-billion dollar company. It was exciting to see its growth and progress and it was more exciting to see the power of computer programming skills at work. That experience made me want to learn how to program for myself.</p>
                        <p>Growing up, my dad worked for the CIA (true story!) so we moved a lot. I've lived in 6 different countries for at least 2 years each. I've also lived in 5 states. Having experienced so many different cultures, I feel like I have the ability to get along well with all kinds of people.</p>
                            <p>In my free time I like to train for triathlons. I've finished an Ironman Triathlon and several shorter distance races as well. I also completed LOTOJA, a bike race which covers 206 miles and enters 3 different states in one day.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

            



