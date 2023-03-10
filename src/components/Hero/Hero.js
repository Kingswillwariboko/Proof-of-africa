import React from 'react'
import btn from "../../assets/a.svg"

import "./Hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className='max'>
        <div className='hero__msg'>
          <h4>Discover <span> Africa </span></h4>
          <p>How do we preserve pieces of traditions foreign to us?</p>
        </div>

        <div className='hero__btn'>
          <img src={btn} alt=""/>
       </div>
      </div>
    </div>
  )
}

export default Hero