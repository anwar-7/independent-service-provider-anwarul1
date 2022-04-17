import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignIn.css';
import { useLocation, useNavigate } from 'react-router-dom';

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
    } else {
      setError({ ...error, password: 'Please provide 6 digit' });
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

  return (
    <div className="signin-container container">
      <div>
        <h1>This is Sign In</h1>
        <Form onSubmit={handleSubmitSineIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {/* email input field */}
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {/* password input field */}
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Sign In
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

export default SignIn;
