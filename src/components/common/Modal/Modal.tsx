import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import {schemaForNewContact} from '../../../validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { patchContact } from '../../../redux/contacts/contactsOperation';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../../redux/store';

type forProps = {name:string, phone:number, onHide:any, id:string, show:boolean}

function UpdateModal(props:forProps) {
  const [newUser, setNewUser] = useState(props.name);
  const [newPhone, setNewPhone] = useState(props.phone);
	const dispatch = useAppDispatch();

	const handleChange = (e:any) => {
    switch (e.target.id) {
      case 'formBasicName':
        setNewUser(e.target.value);
        break;
      case 'formBasicPhone':
        setNewPhone(e.target.value);
        break;
      default:
        break;
    }
  };
	
	type FormValues = {
  name: string;
  number: string;
	};

	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schemaForNewContact) });
	const onSubmit = (data: FormValues) => {
		 const user = {
      name: newUser,
      number: newPhone,
		};
		type forUserParams = {
			userId: string, newContsct: object
		}
    if (user.name && user.number) {
      const userParams:forUserParams = { userId: props.id, newContsct: user };
			dispatch(patchContact(userParams));
			props.onHide();
    } else {
      toast.error('You need to fill in all fields');
    }
	};
	
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
					<Form onChange={handleChange} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>
                <h5>Name :{props.name}</h5>
              </Form.Label>
              <br></br>
							<Form.Control
								{...register('name')}
                type="name"
                placeholder="Enter name"
							/>
							<p className="error">{errors.name?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>
                <h5>Number: {props.phone}</h5>
              </Form.Label>
              <br></br>
							<Form.Control
								{...register('number')}
                type="phone"
                placeholder="Enter phone"
							/>
							<p className="error">{errors.number?.message}</p>
            </Form.Group>

            <Button
              style={{ backgroundColor: '#f0bb29', borderColor: '#c17900' }}
              variant="primary"
              type="submit"
            >
              Update contact
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: '#f0bb29', borderColor: '#c17900' }}
            onClick={props.onHide}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateModal;
