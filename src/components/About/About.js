import React from 'react';
import './About.css';
import anwar from '../../images/anwar/anwar.JPG';

const About = () => {
  return (
    <div
      className=" d-flex align-items-center justify-content-center mt-5"
      style={{ height: '100vh', padding: '10%', marginTop: '60px' }}
    >
      <div className="about-container ">
        <div className="image-field d-flex align-items-center justify-content-center mb-3">
          <img className=" img-fluid" src={anwar} alt="" />
        </div>
        <div className="text-field text-center">
          <h1>Md. Anwarul Islam</h1>
          <h6>
            This is Anwar From Bangladesh. I am a MREN stack Developer. Recently
            i learn it. Development is a creative job, thats why i learn it. I
            don't like regular job that do same work every day. Development is
            like every day is a new day. I want to a job to starting my carrier
            as a Developer. I give 10 to 16 hour to learn Development. After
            finishing my course i will take a job and also cary on my learning.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
