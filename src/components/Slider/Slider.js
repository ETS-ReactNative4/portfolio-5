
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="../../images/css3.png"/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}