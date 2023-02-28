import React, { useState } from 'react'
import africa from "../../assets/7320 1.svg"
import Sliderr from '../Slider.js/Slider'
import avatar from "../../assets/Frame.svg"

import "./carousel.scss"

const datas =[
  {
      title:"Part 1: A Look into History",
      description: "The Kikuyu also known as the 'Gikuyu' people ar the first Bantu ethnic group native to Central Kenya, who undertook the anti-colonial agitation in the 1920s. They believe in..."
  },
  {
      title:"Part 1: A Look into History",
      description: "The Kikuyu also known as the 'Gikuyu' people ar the first Bantu ethnic group native to Central Kenya, who undertook the anti-colonial agitation in the 1920s. They believe in..."
  },
  {
      title:"Part 1: A Look into History",
      description: "The Kikuyu also known as the 'Gikuyu' people ar the first Bantu ethnic group native to Central Kenya, who undertook the anti-colonial agitation in the 1920s. They believe in..."
  },
]

const Carousel = () => {
  const[currentIndex, setCurrentIndex] = useState(0)

  const carouselScroll = () =>{
      if(currentIndex === datas.length -1){
          return setCurrentIndex(0)
      }else{
          setCurrentIndex(currentIndex + 1)
      }
  }


  return (
    <div className="maxy">
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


        <div className='carousel__main'>
          <div className="buttons">
            <div onClick={()=>  setCurrentIndex(0)} className={currentIndex === 0 ? "carousel__main-item" : 'style'}>
                    <div className='inner'>
                        <img src={avatar} alt=""/>
                        <p>The Kikuyu Tribe</p>
                    </div>
                </div>
                <div onClick={()=>  setCurrentIndex(1)}className={currentIndex === 1 ? "carousel__main-item" : 'style'}>
                    <div className='inner'>
                        <img src={avatar} alt=""/>
                        <p>The Maasai Tribe</p>
                    </div>
                </div>
                <div onClick={()=>  setCurrentIndex(2)} className={currentIndex === 2 ? "carousel__main-item" : 'style'}>
                    <div className='inner'>
                        <img src={avatar} alt=""/>
                        <p>The Igbo Tribe</p>
                    </div>
                </div>
          </div>


              <div className="carousel-container">
                {datas.map((data)=>{
                const {title, description} = data
                    return  <div 
                    style={{transform: `translate(-${currentIndex * 100}%)`}} className='carousel-item'>
                        <div className='data'>
                            <div  className='slider__main-one'>
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>

                        <div  className='slider__main-one'>
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>
                        <div className='slider__main-one'>
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>
                        </div>
                </div>
                })}
                </div>
          </div>
          </div>
    </div>
  )
}

export default Carousel