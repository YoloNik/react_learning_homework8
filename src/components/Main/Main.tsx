import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {MainLoader} from '../common/PageLoader/PageLoader';
import { useAppDispatch } from '../../redux/store';
import { getCurrentUser } from '../../redux/auth/authOperation';
import * as authSelector from '../../redux/auth/authSelector';

const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Home = lazy(() => import('../../pages/Home/Home'));
const LogIn = lazy(() => import('../../pages/LogIn/LogIn'));
const Signup = lazy(() => import('../../pages/SignUp/Signup'));

function Main() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector(authSelector.isUserLogin);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/register" />} />
      <Route
        path="/home"
        render={() =>
          isLoggedIn ? (
            <Suspense
              fallback={
                <MainLoader/>
              }
            >
              <Home />
            </Suspense>
          ) : (
            <Redirect to="/login" />
          )
        }
      />

      <Route
        path="/login"
        render={() =>
          !isLoggedIn ? (
            <Suspense
              fallback={
                <MainLoader/>
              }
            >
              <LogIn />
            </Suspense>
          ) : (
            <Redirect to="/contacts" />
          )
        }
      />

      <Route
        path="/register"
        render={() =>
          !isLoggedIn ? (
            <Suspense
              fallback={
                <MainLoader/>
              }
            >
              <Signup />
            </Suspense>
          ) : (
            <Redirect to="/contacts" />
          )
        }
      />

      <Route
        path="/contacts"
        render={() =>
          isLoggedIn ? (
            <Suspense
              fallback={
                <MainLoader/>
              }
            >
              <Contacts />
            </Suspense>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </Switch>
  );
}

export default Main;
