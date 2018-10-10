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
                        <p>I graduated from BYU in 2008 with a degree in Exercise Science. I joined a local tech startup when it had 15 employees and spent several years working there while it grew rapidly. It's now a multi-billion dollar company. It was exciting to see the growth and progress but it was also exciting to see the power of computer programming skills at work. That excitement made me want to learn how to program for myself.</p>
                        <p>Whie I was growing up my dad worked for the CIA (true story!) so we moved a lot. I've lived in 6 different countries for at least 2 years each. I've also lived in 5 different states. Having experienced so many different cultures, I feel like I have the ability to get along well with all kinds of people. </p>
                            <p>In my freetime I like to train for and compete in triathlons. I've finished an Ironman Triathlon and several shorter distance races as well. I also completed LOTOJA, a bike race which covers 206 miles and enters 3 different states in one day.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

            



