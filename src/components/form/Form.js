import React from 'react'

import "./form.scss"

const Form = () => {
  return (
    <>
    <div className='form'>
        <div className='form__header'>
            <h4>New to spaces?</h4>
            <p>Space tip - Introduce yourself culturally, then share, collab and connect</p>

            <button>I’m an artist</button>
        </div>
    </div>

    <div className='formm'>
        <form>
            <h4>Hello Creator</h4>
            <p>Tell us more abut yourself. 
                Fill the form below to register
                 for the POA cultural spaces</p>


         <div className='inp'>
            <label>Phone number</label> 
              <input
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>

          <div className='inp'>
            <label>Phone number</label> 
              <input
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>

          <div className='inp'>
            <label>Phone number</label> 
              <input
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>

          <div className='inp'>
            <label>Phone number</label> 
              <input
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>

          <div className='inp'>
            <label>Phone number</label> 
              <textarea
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>


          <div className='inp'>
            <label>Phone number</label> 
              <textarea
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>


          <div className='inp'>
            <label>Phone number</label> 
              <textarea
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>


          <div className='inp'>
            <label>Phone number</label> 
              <textarea
                    value=""
                    placeholder="Enter phone number"
                    required
                />
          </div>
          <button>Submit</button>
        </form>
        
    </div>
    </>
  )
}

export default Form