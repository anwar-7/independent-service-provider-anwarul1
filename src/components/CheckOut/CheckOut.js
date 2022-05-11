import React from 'react';
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
    <div style={{ height: '100vh' }} className="m-5 p-5">
      <h1 className="mt-5 pt-5">Thank you for the booking</h1>
    </div>
  );
};

export default CheckOut;
