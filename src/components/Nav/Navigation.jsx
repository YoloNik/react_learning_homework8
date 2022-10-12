import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogOutUser } from 'redux/auth/authOperation';
import { NavLink, useLocation } from 'react-router-dom';
import * as authSelector from 'redux/auth/authSelector';
import { HiUserCircle } from 'react-icons/hi';
import { GrLogout } from 'react-icons/gr';
import styles from './Nav.module.scss';

function Navigation() {
  const userOnline = useSelector(authSelector.isUserLogin);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const onLogOut = () => {
    dispatch(LogOutUser());
  };

  return (
    <>
      {userOnline ? (
        <Nav
          fill
          className={styles.navContainer}
          variant="tabs"
          defaultActiveKey="/home"
        >
          <Nav.Item className={styles.navItem}>
            <Nav.Link
              eventKey="/home"
              as="div"
              active={location === '/home' ? true : false}
            >
              <NavLink
                to={`/home`}
                className={styles.link}
                activeClassName={styles.selected}
              >
                <HiUserCircle /> profile
              </NavLink>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={styles.navItem}>
            <Nav.Link
              eventKey="/contacts"
              as="div"
              active={location === '/contacts' ? true : false}
            >
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
            style={{
              backgroundColor: '#EE9B01',
              border: 'none',
              width: '15%',
            }}
            variant="primary"
            type="button"
            onClick={onLogOut}
          >
            <GrLogout />
          </Button>
        </Nav>
      ) : (
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item className={styles.navItem}>
            <Nav.Link
              className={styles.navItem__link}
              eventKey="register"
              as="div"
              active={location === '/register' ? true : false}
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
              active={location === '/login' ? true : false}
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
