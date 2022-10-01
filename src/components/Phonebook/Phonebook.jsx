import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserInput from './UserInput/UserInput';
import FilterPhonebook from './FilterPhonebook/FilterPhonebook';
import ContactList from './ContactList/ContactList';
import { filterChange } from 'redux/contacts/contactsSlice';
import {
  getContacts,
  postContact,
  deleteContact,
  patchContact,
} from 'redux/contacts/contactsOperation';
import s from './Phonebook.module.scss';
import * as contactsSelector from 'redux/contacts/contactsSelector';
import ReactLoading from 'react-loading';
import * as authSelector from 'redux/auth/authSelector';
import UpdateModal from 'components/common/Modal/Modal';
import Button from 'react-bootstrap/Button';

const Phonebook = () => {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [currentContactId, setCurrentContactId] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const filter = useSelector(contactsSelector.getFilter);
  const contacts = useSelector(contactsSelector.getContacts);
  const loading = useSelector(contactsSelector.getLoading);
  const userOnline = useSelector(authSelector.isUserLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setUser(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'filter':
        dispatch(filterChange(e.target.value));
        break;

      default:
        break;
    }
  };

  const addContact = e => {
    const newContact = {
      name: user,
      number: phone,
    };
    const searchSameName = contacts.map(cont => cont.name).includes(user);
    searchSameName
      ? alert(`${user} is already in contacts`)
      : dispatch(postContact(newContact));
    reset();
  };

  const removeContact = e => {
    dispatch(deleteContact(e.target.name));
  };

  const reset = () => {
    setUser('');
    setPhone('');
  };

  const filterByName = () => {
    return contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };
  const updateContact = e => {
    setCurrentContactId(e.target.name);
    setModalShow(true);
  };

  return (
    <>
      <>
        <UpdateModal
          name={user}
          phone={phone}
          id={currentContactId}
          onChange={handleChange}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
      <div className={s.phonebook}>
        <h2 className={s.title}>Phonebook</h2>
        <UserInput
          titel={'Add contact'}
          valueName={user}
          valueTel={phone}
          onChange={handleChange}
          addContact={addContact}
        />
        <div className={s.contactsTitle}>
          {loading ? (
            <>
              <p>We are processing your request, please wait</p>
              <ReactLoading type="spin" width={30} height={30} />
            </>
          ) : (
            <p>Сontacts:</p>
          )}
        </div>

        <FilterPhonebook filterValue={filter} onChange={handleChange} />
        <ContactList
          filter={filter}
          contacts={contacts}
          filterByName={filterByName}
          updateContact={updateContact}
          removeContact={removeContact}
        />
      </div>
    </>
  );
};

export default Phonebook;
