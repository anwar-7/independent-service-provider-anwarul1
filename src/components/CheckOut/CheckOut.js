import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './CheckOut.css';

const CheckOut = () => {
  // const [user, loading] = useAuthState(auth);
  // const navigate = useNavigate();
  // const location = useLocation();
  // let from = location.state?.from?.pathname || '/';
  // useEffect(() => {
  //   if (user) {
  //     navigate(from, { replace: true });
  //   }
  // }, [user]);

  return (
    <div>
      <h1>Bro i m Check out Gazi...!!!</h1>
    </div>
  );
};

export default CheckOut;
