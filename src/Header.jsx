import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);


  return (
    <div className="header">
      <logo>
        <a href="#">
          T<span>o</span>lu
        </a>
      </logo>
      <div className="menu" onClick={() => setShowSideBar(!showSideBar)}>
        {showSideBar ? (
          <FaTimes size={"30px"} />
        ) : (
          <GiHamburgerMenu size={"30px"} />
        )}

        {/* <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span> */}
      </div>

      <ul className={showSideBar ? "sidebar" : "no-display"}>
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#about"> About Me</a>
        </li>

        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
