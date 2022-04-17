import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // , { sendEmailVerification: true }
  // console.log(hookError);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // console.log(googleError);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Email not Valid' });
      setUserInfo({ ...userInfo, email: '' });
    }
    // console.log(e.target.value);
  };

  const handlePasswordChang = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setError({ ...error, password: '' });
    } else {
      setError({ ...error, password: 'Please provide 6 digit' });
      setUserInfo({ ...userInfo, password: '' });
    }
  };

  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setError({ ...error, confirmPassword: '' });
    } else {
      setError({ ...error, confirmPassword: "Password don't match" });
      setUserInfo({ ...userInfo, confirmPassword: '' });
    }
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  // side effect user navigation related
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
      // navigate('/signin');
    }
  }, [user, googleUser]);

  // loading related
  if (loading || googleLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="signup-container container">
      <div>
        <h1>This is Sign up</h1>
        <Form onSubmit={handleSubmitSignUp}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {/* email input field */}
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
            {/* email error massage */}
            {error?.email && (
              <p className="error-message text-danger">{error.email}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {/* password input field */}
            <Form.Control
              onChange={handlePasswordChang}
              type="password"
              placeholder="Password"
              required
            />
            {/* password error massage */}
            {error?.password && (
              <p className="error-message text-danger">{error.password}</p>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            {/* confirm password input field*/}
            <Form.Control
              onChange={handleConfirmPassword}
              type="Password"
              placeholder="Confirm Password"
              required
            />
            {error?.confirmPassword && (
              <p className="error-message text-danger">
                {error.confirmPassword}
              </p>
            )}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        {/* google sign in field  */}
        <div className="google mt-2">
          <Button
            onClick={() => signInWithGoogle()}
            variant="primary"
            type="submit"
          >
            Sign In with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
