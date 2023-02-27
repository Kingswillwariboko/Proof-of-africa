import React from 'react'
import africa from "../../assets/7320 1.svg"
import Sliderr from '../Slider.js/Slider'

import "./carousel.scss"

const Carousel = () => {
  return (
    <div className='carousel'>
        <div className='carousel__tribe'>

            <div className='carousel__tribe-one'>
                <h3>The Tribal Series</h3>

                <p>A look into history, the way of life and music widely practiced by indigenous tribes of Africa.
                    Africa has many heritage, knowledge and traditions as it has people,
                    these ‘traditions are passed down from generation to 
                    generation, and we would love to showcase these 
                    ‘indigenous tribes’ in our own unique way.</p>
            </div>

            
            <div className='carousel__tribe-two'>
                <img src={africa} alt="" />
            </div>

            <Sliderr />
        </div>
    </div>
  )
}

export default Carousel