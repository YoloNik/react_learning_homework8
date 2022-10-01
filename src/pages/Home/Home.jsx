import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { HiUserCircle } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authOperation';
import { userEmail, userName } from 'redux/auth/authSelector';

function Home() {
  const dispatch = useDispatch();
  const name = useSelector(userName);
  const email = useSelector(userEmail);
  const [showInfo, setShowInfo] = useState(false);

  const onUserInfoBtn = () => {
    dispatch(getCurrentUser());
  };
  return (
    <>
      <Button type="button" onClick={onUserInfoBtn}>
        Get user info
      </Button>
      <br></br>
      <p>user: {name}</p>
      <p>email: {email}</p>
    </>
  );
}

Home.propTypes = {};

export default Home;
