import React from 'react'
import Project1 from './proj1.JPEG'
import Project2 from './proj3.PNG'
import Project3 from './proj2.PNG'

const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS (Samples)</h2>
      <div className="cards-ctn">
        <div className="card">
          <div className="card-img">
            <img src={Project1} alt="" />
          </div>
          <h3 className="title">Digital content for Sam's Studio</h3>
          {/* <p>Year: 2021</p> */}
          <button>2021</button>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={Project2} alt="" />
          </div>
          <h3 className="title">Bronchure for Yellow Bricks </h3>
          {/* <p>Year: 2022</p> */}
          <button>2022</button>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={Project3} alt="" />
          </div>
          <h3 className="title">Bronchure for a Real Estate Firm</h3>
          {/* <p>Year: 2022</p> */}
          <button>2022</button>

        </div>
        <div className="card">
          <div className="card-img">
            <img src={Project3} alt="" />
          </div>
          <h3 className="title">Bronchure for a Real Estate Firm</h3>
          {/* <p>Year: 2022</p> */}
          <button>2022</button>

        </div>
        <div className="card">
          <div className="card-img">
            <img src={Project1} alt="" />
          </div>
          <h3 className="title">Bronchure for a Real Estate Firm</h3>
          {/* <p>Year: 2022</p> */}
          <button>2022</button>

        </div>
        <div className="card">
          <div className="card-img">
            <img src={Project2} alt="" />
          </div>
          <h3 className="title">Bronchure for a Real Estate Firm</h3>
          {/* <p>Year: 2022</p> */}
          <button>2022</button>

        </div>




      </div>
    </div>
  );
}

export default Projects