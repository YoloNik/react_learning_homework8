import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { LogInUser, LogOutUser } from '../../redux/auth/authOperation';

function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPasswodr] = useState('');
  const dispatch = useDispatch();

  const userData = e => {
    switch (e.target.id) {
      case 'formBasicEmail':
        setEmail(e.target.value);
        break;
      case 'formBasicPassword':
        setPasswodr(e.target.value);
        break;
      default:
        break;
    }
  };

  const onLogInBtn = () => {
    const user = { email: email, password: password };
    dispatch(LogInUser(user));
  };

  return (
    <>
      <h2>LogIn</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={userData}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={userData}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={onLogInBtn}>
          LogIn
        </Button>
      </Form>
    </>
  );
}

LogIn.propTypes = {};

export default LogIn;
