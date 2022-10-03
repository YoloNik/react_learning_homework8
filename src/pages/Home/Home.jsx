import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/auth/authOperation';
import { userEmail, userName } from 'redux/auth/authSelector';

function Home() {
  const name = useSelector(userName);
  const email = useSelector(userEmail);
  const dispatch = useDispatch();

  const onUserInfoBtn = () => {
    dispatch(getCurrentUser());
  };
  return (
    <>
      <Button
        style={{ backgroundColor: '#EE9B01', border: '2px solid #68904D' }}
        type="button"
        onClick={onUserInfoBtn}
      >
        Get user info
      </Button>
      <br></br>
      <hr></hr>
      <p>User: {name}</p>
      <p>Email: {email}</p>
    </>
  );
}

Home.propTypes = {};

export default Home;
