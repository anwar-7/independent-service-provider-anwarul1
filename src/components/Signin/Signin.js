import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignIn.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  // console.log(userInfo);

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  // console.log(hookError);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // console.log(googleError);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Invalid Email' });
      setUserInfo({ ...userInfo, email: '' });
    }
  };
  const handlePasswordChange = (e) => {
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

  const handleSubmitSineIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [user, googleUser]);

  if (loading || googleLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="signin-container">
      <div className="signin-body">
        <h1 className="text-center fs-2 fw-bold">This is Sign In</h1>
        <Form onSubmit={handleSubmitSineIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {/* email input field */}
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
            {error?.email && (
              <p className="error-message text-danger">{error.email}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {/* password input field */}
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              required
            />
            {error?.password && (
              <p className="error-message text-danger">{error.password}</p>
            )}
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <div className=" d-flex justify-content-center">
            <Button variant="dark fw-bold" type="submit">
              Sign In
            </Button>
          </div>
        </Form>
        <p>
          New Here?{' '}
          <Link
            to="/signup"
            className="text-primary pe-auto text-decoration-none"
            onClick={() => navigate('/signup')}
          >
            Please Sign up
          </Link>{' '}
        </p>
        <p>
          Forget Password?{' '}
          <Link
            to=""
            className="btn btn-link text-primary pe-auto text-decoration-none"
            onClick={() => sendPasswordResetEmail(userInfo.email)}
          >
            Reset Password
          </Link>{' '}
        </p>
        <hr />
        {/* google sign in field  */}
        <div className="google mt-2 d-flex justify-content-center">
          <Button
            onClick={() => signInWithGoogle()}
            variant="dark"
            type="submit"
          >
            <FcGoogle />
            {''} Sign In with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
