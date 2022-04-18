import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import banner1 from '../../images/banner/banner1.png';
import review1 from '../../images/review/review1.png';
import review2 from '../../images/review/review2.png';
import review3 from '../../images/review/review3.png';
import { HiBadgeCheck } from 'react-icons/hi';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* <h1>This is Home</h1> */}
      <div className="banner-container d-flex justify-content-center align-items-center">
        {/* <h3 className=" text-center">This is Banner</h3> */}
        <div className="banner-text d-flex align-items-center h-50 w-100">
          <div>
            <h1>Your Photoshoot</h1>
            <h1>Our Responsibility</h1>
            <p>
              I try my best to make your day memorable. Wedding or your program
              is a business for me. I provide the whole programs Photoshoot. If
              the program will be longer the a day then we will discuses our
              dill for the whole program. And make a ded about it.
            </p>
          </div>
        </div>
        <div className="banner-image">
          <img className=" img-fluid" src={banner1} alt="" />
        </div>
      </div>
      {/* service section or card section */}
      <div className="service-container">
        <h3 style={{ color: 'tomato' }} className="text-center fw-bolder fs-2">
          Service Section
        </h3>
        {/* this is card container */}
        <div className="card-container">
          {/* here is 3 card */}
          <div className="project-card-body text-center">
            <img className=" img-fluid rounded" src={service1} alt="" />
            <h4 className=" mt-2">
              <span className=" fs-4 fw-bold">Mehedi</span>
            </h4>
            <div className="service-detail">
              <p>
                <small>
                  <HiBadgeCheck />
                  Photoshoot 3 hour
                </small>
              </p>
              <p>
                <small>
                  <HiBadgeCheck />
                  200 4R Photo
                </small>
              </p>
              <p>
                <small>
                  <HiBadgeCheck />
                  50 5L Photo
                </small>
              </p>
            </div>
            <h5>$100</h5>
            <Button variant="dark" onClick={() => navigate('/checkout')}>
              Checkout
            </Button>
          </div>
          <div className="project-card-body text-center">
            <img className=" img-fluid rounded" src={service2} alt="" />
            <h4 className=" mt-2">
              <span className=" fs-4 fw-bold">Wedding</span>
            </h4>
            <div className="service-detail">
              <p>
                <small>
                  <HiBadgeCheck />
                  Photoshoot 5 hour
                </small>
              </p>
              <p>
                <small>
                  <HiBadgeCheck />
                  400 4R Photo
                </small>
              </p>
              <p>
                <small>
                  <HiBadgeCheck />
                  100 5L Photo
                </small>
              </p>
            </div>
            <h5>$300</h5>
            <Button variant="dark" onClick={() => navigate('/checkout')}>
              Checkout
            </Button>
          </div>
          <div className="project-card-body text-center">
            <img className=" img-fluid rounded" src={service3} alt="" />
            <h4 className=" mt-2">
              <span className=" fs-4 fw-bold">Full Wedding</span>
            </h4>
            <div className="service-detail">
              <p>
                <small>
                  <HiBadgeCheck />
                  Photoshoot 12 hour
                </small>
              </p>
              <p>
                <small>
                  <HiBadgeCheck />
                  1000 4R Photo
                </small>
              </p>
              <p>
                <small>
                  <HiBadgeCheck />
                  200 5L Photo
                </small>
              </p>
            </div>
            <h5>$800</h5>
            <Button variant="dark" onClick={() => navigate('/checkout')}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <div className="review-container">
        <h3 style={{ color: 'tomato' }} className="text-center fw-bold">
          Customers Review
        </h3>
        <div>
          {/* this is review card container */}
          <div className="card-container">
            {/* here is 3 card */}
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review1} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Malika</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </p>
                <p>
                  <small>
                    He is a vary good photographer.I provide him a program and
                    he do it well. I think he is bast on it.
                  </small>
                </p>
              </div>
            </div>
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review2} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Kamal Hamid</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>
                  <small>
                    I am a fan of him, he is a bast Wedding photographer in the
                    city. I you would not disappoint to take him as your program
                    photographer.
                  </small>
                </p>
              </div>
            </div>
            <div className="project-card-body text-center">
              <img className=" img-fluid rounded" src={review3} alt="" />
              <h4 className=" mt-2">
                <span className=" fs-4 fw-bold">Alomgir Alom</span>
              </h4>
              <div className="service-detail">
                <p style={{ color: 'orange' }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>
                  <small>
                    I am pretty much happy to take his service. I will
                    definitely take him for my future program.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
