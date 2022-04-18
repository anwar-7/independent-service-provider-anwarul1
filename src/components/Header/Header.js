import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Digital<span style={{ color: 'tomato' }}>Camera</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'active-link text-decoration-none text-center'
                    : 'link text-decoration-none text-center'
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'active-link text-decoration-none'
                    : 'link text-decoration-none text-center'
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'active-link text-decoration-none'
                    : 'link text-decoration-none text-center'
                }
                to="/about"
              >
                About
              </NavLink>
            </Nav>
            {/* header right side */}
            <Nav>
              {user ? (
                <div className="d-flex justify-content-center">
                  <button
                    className="sign-out-link"
                    onClick={() => signOut(auth, navigate('/'))}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'active-sign-in-link text-decoration-none'
                      : 'link text-decoration-none text-center'
                  }
                  to="/signin"
                >
                  Sign In
                </NavLink>
              )}
              {/* signup show in ui */}
              {/* <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
          to="/signup"
        >
          Sign Up
        </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
