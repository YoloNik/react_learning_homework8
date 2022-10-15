import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LogInUser, } from '../../redux/auth/authOperation';
import {schemaForLoginUser} from '../../validation/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../redux/store';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPasswodr] = useState('');
  const dispatch = useAppDispatch();

  const userData = (e:any) => {
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

	type FormValues = {
  email: string;
  password: string;
	};

	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schemaForLoginUser) });
	const onSubmit = (data: FormValues) => {
		const user: FormValues = { email: email, password: password };
    dispatch(LogInUser(user));
	}

  return (
    <>
      <h2>LogIn</h2>
      <Form onChange={userData} onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
					{...register('email')}
            style={{ border: '1px solid #c17900' }}
            type="email"
            placeholder="Enter email"
					/>
					<p className="error">{errors.email?.message}</p>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
					{...register('password')}
            style={{ border: '1px solid #c17900' }}
            type="password"
            placeholder="Password"
					/>
					<p className="error">{errors.password?.message}</p>
        </Form.Group>

        <Button
          style={{ backgroundColor: '#f0bb29', borderColor: '#c17900' }}
          variant="primary"
          type="submit"
        >
          LogIn
        </Button>
      </Form>
    </>
  );
}

LogIn.propTypes = {};

export default LogIn;
