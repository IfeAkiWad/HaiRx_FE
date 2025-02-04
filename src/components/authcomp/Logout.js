import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/userActions';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    // Additional logic: Redirect or update UI to reflect the logout
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
