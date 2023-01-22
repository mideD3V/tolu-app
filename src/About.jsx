import React from 'react'
import Tolu from './tolu.jpg'
const About = () => {
  return (
    <div className="about">
      <div className="abt-img">
        <img src={Tolu} alt="tolu" />
      </div>
      <div className="text">
        <h2>ABOUT ME</h2>

        <p>
          My name is Charlotte, I am a creative business development officer and
          an expert Canva designer with over 5+years experience. I have helped
          several organization position their brand. I love to create designs
          using Canva and I have become an expert at it. I have also done a lot
          of personal and corporate projects that have given me so much
          experience in this field.
        </p>
      </div>
    </div>
  );
}

export default About