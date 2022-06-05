import React from 'react';
import './NotFound.css';
import notfound from '../../images/notfound.png';

const NotFound = () => {
  return (
    <div className="w-100 mx-auto">
      <img className="w-100 mx-auto" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
