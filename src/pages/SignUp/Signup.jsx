import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { signupNewUser } from 'redux/auth/authOperation';

function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswodr] = useState('');
  const dispatch = useDispatch();

  const userData = e => {
    switch (e.target.id) {
      case 'formBasicName':
        setName(e.target.value);
        break;
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

  const onSignUpBtn = () => {
    const user = { name: name, email: email, password: password };
    dispatch(signupNewUser(user));
  };

  return (
    <>
      <h2>SignUp</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            onChange={userData}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={userData}
            value={email}
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
            onChange={userData}
            value={password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={onSignUpBtn}>
          Submit
        </Button>
      </Form>
    </>
  );
}

Signup.propTypes = {};

export default Signup;
