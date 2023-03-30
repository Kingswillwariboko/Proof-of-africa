import React, { useState } from "react";
import down from "./../assets/Chevron Down.svg"

import "./accordion.scss"

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <p>{title}</p> 
        {isOpen ? (
            <img src={down} alt=""/>
        ) : (
            <img src={down} alt=""/>
        )}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;
