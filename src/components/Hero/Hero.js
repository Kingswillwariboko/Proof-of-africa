import React from 'react'
import btn from "../../assets/a.svg"
import { Link } from 'react-scroll';
import "./Hero.scss"

const Hero = () => {
 
  return (
    <div className="hero">
      <div className='max'>
        <div className='hero__msg'>
          <h4>Discover <span> Africa </span></h4>
          <p>How do we preserve pieces of traditions foreign to us?</p>
        </div>

        <Link
        to="features-section"
        smooth={true}
        duration={500}
      >
        <button className='hero__btn'>
          <img src={btn} alt=""/>
       </button>
       </Link>
      </div>
    </div>
  )
}

export default Hero