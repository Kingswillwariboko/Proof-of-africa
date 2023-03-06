import React, { useState } from "react"
import logo from "../../assets/Proof of Africa logo con outline e tagline 2.svg"
import menu from "../../assets/menu-01.svg"


import "./header.scss"


const Menu = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return(
    <>
    <li><a href="#about">About Us</a></li>
    <li><a href="#projects">Projects</a></li>
    <li onClick={toggleAccordion}>
          Accordion
          {accordionOpen ? (
            <ul>
              <li>Accordion Item 1</li>
              <li>Accordion Item 2</li>
              <li>Accordion Item 3</li>
            </ul>
          ) : null}
      </li>
    <button type="button" className="poa__navbar-links_stake"><a href="#stake">Start Staking</a></button>
    </>
    )
}

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
      <div className="max">
        <div className="poa__navbar">
      <div className="poa__navbar-links">
        <div className="poa__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="poa__navbar-links_container">
          <Menu />
        </div>

      </div>

      <div className="poa__navbar-menu">
        {toggleMenu
          ? <img src={menu} alt=""/>
          : <img src={menu} alt="" onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="poa__navbar-menu_container scale-up-center">
            <div className="poa__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    )
}

export default Header;