import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//import * as contactsSelector from 'redux/contacts/contactsSelector';
import { patchContact } from 'redux/contacts/contactsOperation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function UpdateModal(props) {
  const [newUser, setNewUser] = useState(props.name);
  const [newPhone, setNewPhone] = useState(props.phone);
  const dispatch = useDispatch();

  const handleChange = e => {
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

  const updateContact = e => {
    e.preventDefault();

    const user = {
      name: newUser,
      number: newPhone,
    };
    if (user.name && user.number) {
      const userParams = { userId: props.id, newContsct: user };

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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>
                <h5>Name :{props.name}</h5>
              </Form.Label>
              <br></br>
              {/*<Form.Label>New name :{newUser}</Form.Label>*/}
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={handleChange}
                value={newUser}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>
                <h5>Number: {props.phone}</h5>
              </Form.Label>
              <br></br>
              {/*<Form.Label>New number :{newPhone}</Form.Label>*/}
              <Form.Control
                type="phone"
                placeholder="Enter phone"
                onChange={handleChange}
                value={newPhone}
              />
            </Form.Group>

            <Button
              style={{ backgroundColor: '#f0bb29', borderColor: '#c17900' }}
              variant="primary"
              type="button"
              onClick={updateContact}
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
