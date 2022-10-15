import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {schemaForSignupUser} from '../../validation/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { signupNewUser } from '../../redux/auth/authOperation';
import { useAppDispatch } from '../../redux/store';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasswodr] = useState('');
	const dispatch = useAppDispatch();
	
	
  const userData = (e:any) => {
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

type FormValues = {
  name: string;
  email: string;
  password: string;
	};

	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schemaForSignupUser) });
	const onSubmit = (data: FormValues) => {
		const user: FormValues = { name: name, email: email, password: password };
    dispatch(signupNewUser(user));
	}

  return (
    <>
      <h2>SignUp</h2>
      <Form onChange={userData} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
					<Form.Control
						{...register('name')}
            style={{ border: '1px solid #c17900' }}
            type="name"
            placeholder="Enter your name"
					/>
					<p className="error">{errors.name?.message}</p>
        </Form.Group>

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
          style={{ backgroundColor: '#EE9B01', border: '1px solid #68904D' }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Signup;
