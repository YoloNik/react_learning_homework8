import { NavLink } from 'react-router-dom';

import styles from './Nav.module.scss';
import Nav from 'react-bootstrap/Nav';
import * as authSelector from 'redux/auth/authSelector';
import { useDispatch, useSelector } from 'react-redux';
import { HiUserCircle } from 'react-icons/hi';
import Button from 'react-bootstrap/Button';
import { LogOutUser } from 'redux/auth/authOperation';
import LogIn from 'pages/LogIn/LogIn';
import Signup from 'pages/SignUp/Signup';
//import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Nav.Item className={styles.navItem}>
            <Nav.Link eventKey="/home" as="div">
              <NavLink
                to={`/home`}
                className={styles.link}
                activeClassName={styles.selected}
              >
                <HiUserCircle /> {user}
              </NavLink>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={styles.navItem}>
            <Nav.Link eventKey="/contacts" as="div">
              <NavLink
                to={`/contacts`}
                className={styles.link}
                activeClassName={styles.selected}
              >
                Contacts
              </NavLink>
            </Nav.Link>
          </Nav.Item>

          <Button
            style={{ backgroundColor: '#f0bb29', borderColor: '#c17900' }}
            variant="primary"
            type="button"
            onClick={onLogOut}
          >
            LogOut
          </Button>
        </Nav>
      ) : (
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item className={styles.navItem}>
            <Nav.Link
              className={styles.navItem__link}
              eventKey="register"
              as="div"
            >
              <NavLink
                to={`/register`}
                className={styles.link}
                activeClassName={styles.selected}
              >
                SignUp
              </NavLink>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={styles.navItem}>
            <Nav.Link
              className={styles.navItem__link}
              eventKey="login"
              as="div"
            >
              <NavLink
                to={`/login`}
                className={styles.link}
                activeClassName={styles.selected}
              >
                LogIn
              </NavLink>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
    </>
  );
}

export default Navigation;
