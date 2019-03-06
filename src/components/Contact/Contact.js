import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../Contact/contact.css'

export default class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <div className="contact-inner">

                <div className="contact-item">
                    rmemory@gmail.com
                </div>
                <div className="contact-item">
                    linkedin.com/in/russellmemory
                </div>
                <div className="contact-item">
                    github.com/rgmemory
                </div>

                </div>
            </div>
        )
    }
}