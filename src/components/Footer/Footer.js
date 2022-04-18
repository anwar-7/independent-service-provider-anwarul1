import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* <section>Footer Example 4</section> */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Digital<span>Camera</span>
          </h3>

          <p className="footer-company-name">Digital Camera © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            This ia a individual photographer service providing website. I work
            as a photographer like 20 years. I believing in a moot that your
            program, my responsibility.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
