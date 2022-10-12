import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as authSelector from 'redux/auth/authSelector';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/auth/authOperation';
import { ColorRing } from 'react-loader-spinner';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Home = lazy(() => import('pages/Home/Home'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const Signup = lazy(() => import('pages/SignUp/Signup'));

function Main() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelector.isUserLogin);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const wrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7',
  };

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/register" />} />
      <Route
        path="/home"
        render={() =>
          isLoggedIn ? (
            <Suspense
              fallback={
                <ColorRing
                  visible={true}
                  ariaLabel="blocks-loading"
                  wrapperStyle={wrapperStyle}
                  colors={[
                    '#c17900',
                    '#f0bb29',
                    '#e7eceb',
                    '#b6d1df',
                    '#223f4a',
                  ]}
                />
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
                <ColorRing
                  visible={true}
                  ariaLabel="blocks-loading"
                  wrapperStyle={wrapperStyle}
                  colors={[
                    '#c17900',
                    '#f0bb29',
                    '#e7eceb',
                    '#b6d1df',
                    '#223f4a',
                  ]}
                />
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
                <ColorRing
                  visible={true}
                  ariaLabel="blocks-loading"
                  wrapperStyle={wrapperStyle}
                  colors={[
                    '#c17900',
                    '#f0bb29',
                    '#e7eceb',
                    '#b6d1df',
                    '#223f4a',
                  ]}
                />
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
                <ColorRing
                  visible={true}
                  ariaLabel="blocks-loading"
                  wrapperStyle={wrapperStyle}
                  colors={[
                    '#c17900',
                    '#f0bb29',
                    '#e7eceb',
                    '#b6d1df',
                    '#223f4a',
                  ]}
                />
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
