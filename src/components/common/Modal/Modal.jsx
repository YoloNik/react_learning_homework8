import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as authSelector from 'redux/auth/authSelector';
import * as contactsSelector from 'redux/contacts/contactsSelector';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import UserInput from 'components/Phonebook/UserInput/UserInput';
import { patchContact } from 'redux/contacts/contactsOperation';

function UpdateModal(props) {
  const [newUser, setNewUser] = useState('');
  const [newPhone, setNewPhone] = useState('');
  //const user = useSelector(authSelector.userName);
  const contact = useSelector(contactsSelector.getContacts);
  //const id = useSelector();
  const dispatch = useDispatch();
  //console.log(props);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setNewUser(e.target.value);
        break;
      case 'phone':
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
    //console.log(user);

    const searchSameName = contact.map(cont => cont.name).includes(user);
    searchSameName
      ? alert(`${user} is already in contacts`)
      : dispatch(patchContact(props.id, user));
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
          <p>
            {props.name} : {props.phone}. {props.id}
          </p>

          <UserInput
            titel={'Update contact'}
            valueName={newUser}
            valueTel={newPhone}
            onChange={handleChange}
            addContact={updateContact}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

Modal.propTypes = {};

export default UpdateModal;
