import React, { useRef, useState } from 'react'

import "./form.scss"

const options = [
  {
    value: "3D"
  },
  {
    value: "Animation"
  },
  {
    value: "Architecture"
  },
  {
    value: "Character Design"
  },
  {
    value: "Comics"
  },
  {
    value: "Concept Art"
  },
  {
    value: "Contemporary Art"
  },
  {
    value: "Collage"
  },
  {
    value: "Digital Painting"
  },
  {
    value: "Illustrationt"
  },
  {
    value: "Interactive"
  },
  {
    value: "Motion"
  },
  {
    value: "Painting"
  },
]

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const scrollableContainerRef = useRef(null);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => (
    <li ref={scrollableContainerRef} className="" key={option.value} onClick={() => handleOptionClick(option.value)}>
      {option.value}
    </li>
  ));


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

        <div className='main-box'>
        <div className='box'>
            <div className='inpp'>
                <label>Phone number</label> 
                <input
                        value=""
                        placeholder="Enter phone number"
                        required
                    />
            </div>

            <div className='inpp'>
                <label>Phone number</label> 
                <input
                        value=""
                        placeholder="Enter phone number"
                        required
                    />
            </div>
        </div>

        <div className='box'>
            <div className='inpp'>
                <label>Phone number</label> 
                <input
                        value=""
                        placeholder="Enter phone number"
                        required
                    />
            </div>

            <div className='inpp'>
                <label>options</label> 
                <div 
                className="dropdown"
                tabIndex="0"
                onBlur={() => setIsOpen(false)}
                onFocus={() => setIsOpen(true)}>
                <input
                        type="dropdown"
                        placeholder="Select an option"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        onClick={() => setIsOpen(true)}
                    />
                    {isOpen && (
                      <ul className="dropdown-menu">
                       {renderedOptions}
                    </ul>
                     )}
                </div>
                
            </div>
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
        </div>

        
        </form>
        
    </div>
    </>
  )
}

export default Form