import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import service1 from '../../images/service1.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1>This is Home</h1>
      <div className="banner-container">
        <h3 className=" text-center">This is Banner</h3>
      </div>
      {/* service section or card section */}
      <div className="service-container">
        <h3 className=" text-center fw-bolder fs-2">Service Section</h3>
        <div className="card-container">
          <div className="project-card-body text-center">
            <img className=" img-fluid rounded" src={service1} alt="" />
            <h4 className=" mt-2">
              <span className=" fs-4 fw-bold">Mehedi</span>
            </h4>
            <p>description</p>
            <h5>$100</h5>
            <Button onClick={() => navigate('/checkout')}>Checkout</Button>
          </div>
        </div>
      </div>
      <div className="review-container">
        <h3>This is Review, Feel free to implement anything</h3>
      </div>
    </div>
  );
};

export default Home;
