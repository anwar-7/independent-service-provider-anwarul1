import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is Home</h1>
      <div className="banner-container">
        <h3 className=" text-center">This is Banner</h3>
      </div>
      <div className="service-container">
        <h3 className=" text-center">This is service</h3>
        <div className="card-container">
          <div className="card text-center">
            <img src="" alt="" />
            <h4>
              <span className="">service 1</span>
            </h4>
            <p>description</p>
            <button onClick={() => navigate('/checkout')}>Checkout</button>
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
