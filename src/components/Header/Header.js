import React, { useState } from "react"
import logo from "../../assets/Proof of Africa logo con outline e tagline 2.svg"
import menu from "../../assets/menu-01.svg"


import "./header.scss"


const Menu = () => (
    <>
    <p><a href="#about">About Us</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#discover">Discover Africa</a></p>
    <button type="button" className="poa__navbar-links_stake"><a href="#stake">Start Staking</a></button>
    </>
  )


const Header = () =>{
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
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
    )
}

export default Header;