import React from 'react'
import thankyou from "../../assets/unsplash_3TLl_97HNJo.svg"
import close from "../../assets/close.svg"
import "./modal.scss"

const Modal = () => {
  return (
    <div className='modal'>
        <img className='close' src={close} alt=""/>
        <img src={thankyou} alt=""/>
        <h3>Thank you!</h3>
        <p>Your submission has been received</p>
    </div>
  )
}

export default Modal;