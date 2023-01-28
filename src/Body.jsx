import React from "react";
// import Tolu from './tolu.png'
import HeroImg from "./asset/mymind-rbg.png";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Projects from "./Projects";
import Footer from "./Footer";
import Typewriter from "typewriter-effect";
import ColorGrid from "./ColorGrid";
import LinearDot from './asset/SeekPng.com_dot.png'
import RadialDot from './asset/dot-clipart.png'

const Body = () => {
  return (
    <div className="body">
      <section className="hero">
        <div className="hero-txt">
          <h5>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hello, I'm Charlotte Iyiola").start();
              }}
            />
          </h5>

          <h1>Graphics Designer & Content Creator</h1>
          <p>
            <marquee behavior="slide" direction="down" scrolldelay="250">
              I create amazing digital and graphic content for businesses to
              help improve online presence and sales
            </marquee>
          </p>
          <a href="#contact">
            <button title="Send Charlotte a message about your project">
              Send me a message
            </button>
          </a>
        </div>

        <div className="hero-img">
          <marquee behavior="slide" direction="left"
            loop='1'
            scrolldelay='20' truespeed='2'>
            
            <img src={HeroImg} alt="tolu" />
          </marquee>
        </div>

        <ColorGrid />

        <div className="dots">
          <img src={LinearDot} alt="" className="dot1" />
          <img src={RadialDot} alt="" className="dot2" />
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Body;
