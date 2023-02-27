import React, { useState } from 'react'
import avatar from "../../assets/Frame.svg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.scss"

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

const Sliderr = () => {

    const[currentIndex, setCurrentIndex] = useState(0)

    const carouselScroll = () =>{
        if(currentIndex === datas.length -1){
            return setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
    }
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
      };

  return (
    <div className='main-slider'>
    <div className='slider'>

        <div className='slider__menu mobile'>
        <Slider {...settings}>
            <div className='slider__menu-one'>
                <div  onClick={()=>  setCurrentIndex(0)} className={currentIndex === 0 ? "chk": 'style'}>
                    <img src={avatar} alt=""/>
                    <p>The Kikuyu Tribe</p>
                </div>
            </div>
            <div  onClick={()=>  setCurrentIndex(1)}className='slider__menu-one'>
                <div className={currentIndex === 1 ? "chk": 'style'}>
                    <img src={avatar} alt=""/>
                    <p>The Maasai Tribe</p>
                </div>
            </div>
            <div  onClick={()=>  setCurrentIndex(2)} className='slider__menu-one'>
                <div className={currentIndex === 2 ? "chk": 'style'}>
                    <img src={avatar} alt=""/>
                    <p>The Igbo Tribe</p>
                </div>
            </div>
        </Slider>
        </div >

      
            
                <div className="carousel-container">
                {datas.map((data)=>{
                const {title, description} = data
                    return  <div 
                    style={{transform: `translate(-${currentIndex * 100}%)`}} className='slider__main carousel-item'>
                        <div className='mmain'>
                            <div className='slider__main-one'>
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>

                        <div className='slider__main-one'>
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
  )
}

export default Sliderr