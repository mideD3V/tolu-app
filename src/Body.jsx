import React from 'react'
import Tolu from './tolu.png'
import HeroImg from './mymind.png'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Projects from './Projects'
import Footer from './Footer'
import 'typewriter-effect'
const Body = () => {
  return (
      <div className='body'>
          <section className="hero">
              <div className="hero-txt">
                  <h5>Hello, I'm Charlotte Tolu Iyiola</h5>
                  <h1>
                      Graphics Designer & Content Creator
                  </h1>
                  <p>I create amazing graphic content for businesses</p>
                  <button>
                      Send me a message
                  </button>
              </div>
              <div className="hero-img">
                  <img src={HeroImg} alt="tolu" />
              </div>
          </section>
          <section id="about">
              <About/>
          </section>
          <section id="services">
              <Services/>
          </section>
          <section id="projects">
              <Projects/>
          </section>
          <section id="contact">
              <Contact/>
          </section>
          <section id="footer">
              <Footer/>
          </section>
          </div>
  )
}

export default Body