import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <logo>
        <a href='#' style={{color:'white'}}>Tolu</a>
      </logo>
      {/* <h2>Tolu</h2> */}
      <p>Connect with me on all social media platforms</p>
      <div className="socials">

        <FaTwitter className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaBehance className="social-icon" />
        <FaLinkedin className="social-icon" />
        <FaYoutube className="social-icon" />
      </div>
      <div className="copy">
        Copyright &copy; 2023 - Iyiola Charlotte
      </div>
    </div>
  );
}

export default Footer