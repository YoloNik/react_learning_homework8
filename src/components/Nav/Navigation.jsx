import { NavLink } from 'react-router-dom';

import styles from './Nav.module.scss';
import Nav from 'react-bootstrap/Nav';
import * as authSelector from 'redux/auth/authSelector';
import { useDispatch, useSelector } from 'react-redux';
import { HiUserCircle } from 'react-icons/hi';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import { LogOutUser } from 'redux/auth/authOperation';

function Navigation() {
  const user = useSelector(authSelector.userName);
  const userOnline = useSelector(authSelector.isUserLogin);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(LogOutUser());
  };

  return (
    <>
      {userOnline ? (
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <NavLink to={`/home`}>
              <HiUserCircle /> {user}
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to={`/contacts`}>Contacts</NavLink>
          </Nav.Item>

          <Button variant="primary" type="button" onClick={onLogOut}>
            LogOut
          </Button>
        </Nav>
      ) : (
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <NavLink to={`/register`}>SignUp</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to={`/login`}>LogIn</NavLink>
          </Nav.Item>
        </Nav>
      )}
    </>
  );
}

export default Navigation;
