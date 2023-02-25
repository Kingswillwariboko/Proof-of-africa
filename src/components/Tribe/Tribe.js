import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import group from "../../assets/Group 3624.svg"

import "./tribe.scss"



const Tribe = () => {

  const settings = {
    arrows: false,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (

    <div className='tribe'>
      <Slider {...settings}>
        <div className='tribe__main-one check-one'>
            <div className="main">
                <h4>The Tribal series</h4>
                <p>Take a trip to the past</p>
                <button>Connect with us</button>
            </div>
           
            <div className='img'>
                <img src={group} alt=""/>
            </div>
        </div>

        <div className='tribe__main-one check-two'>
            <div className="main">
                <h4>Cultural Spaces</h4>
                <p>An opportunity to uncover talented web3 artists cross chain</p>
                <button> Connect with us</button>
            </div>
           
           
        </div>
        </Slider>
    </div>
  )
}

export default Tribe