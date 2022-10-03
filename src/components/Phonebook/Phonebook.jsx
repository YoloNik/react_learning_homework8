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
} from 'redux/contacts/contactsOperation';
import styles from './Phonebook.module.scss';
import * as contactsSelector from 'redux/contacts/contactsSelector';
import * as authSelector from 'redux/auth/authSelector';
import { Radio } from 'react-loader-spinner';
import { toast } from 'react-toastify';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Phonebook = () => {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const filter = useSelector(contactsSelector.getFilter);
  const contacts = useSelector(contactsSelector.getContacts);
  const loading = useSelector(contactsSelector.getLoading);
  const userOnline = useSelector(authSelector.isUserLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userOnline) dispatch(getContacts());
  }, [dispatch, userOnline]);

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
      ? toast(`Person: "${user}" is already in contacts`)
      : dispatch(postContact(newContact));
    reset();
  };

  const removeContact = e => {
    dispatch(deleteContact(e.target.name));
    dispatch(getContacts());
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

  return (
    <div className={styles.phonebook}>
      <h2 className={styles.title}>Phonebook</h2>
      <UserInput
        titel={'Add contact'}
        valueName={user}
        valueTel={phone}
        onChange={handleChange}
        addContact={addContact}
      />
      <div className={styles.listWraper}>
        <div className={styles.contactsTitle}>
          {loading ? (
            <>
              <p>We are processing your request, please wait...</p>
              <Radio
                colors={['#223f4a', '#f0bb29', '#c17900']}
                visible={true}
                height="30"
                width="30"
                ariaLabel="radio-loading"
                wrapperStyle={{ width: '20%' }}
                wrapperClass="radio-wrapper"
              />
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
          removeContact={removeContact}
        />
      </div>
    </div>
  );
};

export default Phonebook;
