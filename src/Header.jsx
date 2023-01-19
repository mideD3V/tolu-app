import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <logo>
        <p>
          T<span>o</span>lu
        </p>
      </logo>
      <div className="menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul>
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header