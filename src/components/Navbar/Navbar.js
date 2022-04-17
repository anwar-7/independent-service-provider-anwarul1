import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className=" d-flex justify-content-between">
      <div>
        <h1>Navbar</h1>
      </div>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/about"
        >
          About
        </NavLink>
        {user ? (
          <Button onClick={() => signOut(auth, navigate('/'))}>Sign Out</Button>
        ) : (
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : 'link')}
            to="/signin"
          >
            Sign In
          </NavLink>
        )}
        {/* <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/signup"
        >
          Sign Up
        </NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;
