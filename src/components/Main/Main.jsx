import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom';

import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import LogIn from 'pages/LogIn/LogIn';
import Signup from 'pages/SignUp/Signup';
import * as authSelector from 'redux/auth/authSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/auth/authOperation';

function Main(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelector.isUserLogin);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  console.log('isLoggedIn ', isLoggedIn);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/register" />} />

      {/*auth*/}
      <Route
        path="/home"
        render={() => (isLoggedIn ? <Home /> : <Redirect to="/login" />)}
      />

      {/*no auth*/}
      <Route
        path="/login"
        render={() => (!isLoggedIn ? <LogIn /> : <Redirect to="/contacts" />)}
      />

      {/*no auth*/}
      <Route
        path="/register"
        render={() => (!isLoggedIn ? <Signup /> : <Redirect to="/contacts" />)}
      />

      {/*auth*/}
      <Route
        path="/contacts"
        render={() => (isLoggedIn ? <Contacts /> : <Redirect to="/login" />)}
      />
    </Switch>
  );
}

Main.propTypes = {};

export default Main;
