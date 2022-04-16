import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <h1>This is Navbar</h1>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/signin"
        >
          SignIn
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/signup"
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
