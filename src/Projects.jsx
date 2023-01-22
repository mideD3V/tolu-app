import React from 'react'
import Project1 from './proj1.JPEG'
import Project2 from './proj3.PNG'
import Project3 from './proj2.PNG'

const Projects = () => {
  return (
    <div id="projects">
      <h2>PROJECTS</h2>
      <div className="cards-ctn">
        <div className="card">
          <div className='card-img'>
            <img src={Project1} alt="" />
          </div>
          <h3 className="title">Design for HhAmanagreens</h3>
          <p>Year: 2022</p>
        </div>

        <div className="card">
           <div className='card-img'><img src={Project2} alt="" /></div>
          <h3 className="title">Food Content for social media </h3>
          <p>Year: 2022</p>
        </div>
        <div className="card">
           <div className='card-img'><img src={Project3} alt="" /></div>
          <h3 className="title">Company Profile Design for Kinda</h3>
          <p>Year: 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Projects