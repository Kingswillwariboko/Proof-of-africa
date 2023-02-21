import React from 'react'
import group from "../../assets/Group 3624.svg"

import "./tribe.scss"

const Tribe = () => {
  return (
    <div className='tribe'>
        <div className='tribe__main one'>
            <div>
                <h4>The Tribal series</h4>
                <p>Take a trip to the past</p>
                <button>Connect with us</button>
            </div>
           
            <div className='img'>
                <img src={group} alt=""/>
            </div>
        </div>

        <div className='tribe__main two'>

        </div>
    </div>
  )
}

export default Tribe