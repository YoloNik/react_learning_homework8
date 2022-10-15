import React from 'react';

import { useSelector } from 'react-redux';

import { userEmail, userName } from '../../redux/auth/authSelector';
import WebcamUser from '../../components/common/Webcam/Webcam';

function Home() {
  const name = useSelector(userName);
  const email = useSelector(userEmail);

  return (
    <>
      <WebcamUser />
      <hr></hr>
      <p>User: {name}</p>
      <p>Email: {email}</p>
    </>
  );
}

Home.propTypes = {};

export default Home;
