import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmil = emailRegex.test(e.target.value);
    if (validEmil) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setError({ ...error, email: '' });
    } else {
      setError({ ...error, email: 'Email not Valid' });
      setUserInfo({ ...userInfo, email: '' });
    }
    console.log(e.target.value);
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
      setError({ ...error, password: '' });
    } else {
      setError({ ...error, password: "Password don't match" });
      setUserInfo({ ...userInfo, confirmPassword: '' });
    }
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);

  return (
    <div className="signup-container">
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
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
              type="Confirm Password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
