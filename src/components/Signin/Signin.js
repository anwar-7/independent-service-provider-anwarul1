import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  console.log(userInfo);

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const handleSubmitSineIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);

  return (
    <div className="signin-container">
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
      </div>
    </div>
  );
};

export default SignIn;
