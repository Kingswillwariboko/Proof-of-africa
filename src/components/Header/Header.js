import React from "react"
import logo from "../../assets/Proof of Africa logo con outline e tagline 2.svg"
import menu from "../../assets/menu-01.svg"


import "./header.scss"


const Header = () =>{
    return(
        <div className="header">
            <div className="max">
                <div className="header__logo">
                    <img src={logo} alt=""/>
                </div>

                <div className="header__menu">
                    <img src={menu} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Header;