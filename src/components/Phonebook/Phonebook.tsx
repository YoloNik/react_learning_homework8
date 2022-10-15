import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UserInput from './UserInput/UserInput';
import FilterPhonebook from './FilterPhonebook/FilterPhonebook';
import ContactList from './ContactList/ContactList';
import { filterChange } from '../../redux/contacts/contactsSlice';
import {
  getContacts,
  postContact,
  deleteContact,
} from '../../redux/contacts/contactsOperation';
import styles from  './Phonebook.module.scss';
import * as contactsSelector from '../../redux/contacts/contactsSelector';
import * as authSelector from '../../redux/auth/authSelector';

import { toast } from 'react-toastify';
import { useAppDispatch } from '../../redux/store';
import { RequestLoader } from '../common/PageLoader/PageLoader';


const Phonebook = () => {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const filter: string = useSelector(contactsSelector.getFilter);
  const contacts: object[] = useSelector(contactsSelector.getContacts);
  const loading: boolean = useSelector(contactsSelector.getLoading);
  const userOnline: boolean = useSelector(authSelector.isUserLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userOnline) dispatch(getContacts());
  }, [dispatch, userOnline]);

  const handleChange = (e:any) => {
    switch (e.target.name) {
      case 'name':
        setUser(e.target.value);
        break;
      case 'number':
				setPhone(e.target.value);
        break;
      case 'filter':
        dispatch(filterChange(e.target.value));
        break;

      default:
        break;
    }
  };

	const addContact = async () => {
		const newContact = {
			name: user,
			number: phone,
		}
    const searchSameName = contacts.map((cont:any) => cont.name).includes(user);
		searchSameName
			? toast(`Person: "${user}" is already in contacts`) && setUser('')
			: await dispatch(postContact(newContact)) && reset();
  };

  const removeContact = (e:any) => {
    dispatch(deleteContact(e.target.name));
    dispatch(getContacts());
  };

  const reset = () => {
    setUser('');
    setPhone('');
  };

  const filterByName = () => {
    return contacts.filter((el:any) =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  return (
    <div className={styles.phonebook}>
      <h1 className={styles.title}>Phonebook</h1>
      <UserInput
				titel={'Add contact'}
				addContact={addContact}
				nameVal={user}
				phoneVal={phone}
				handleChange={handleChange}
			/>
        <div className={styles.contactsTitle}>
          {loading ? (
            <>
              <h2 className={styles.contactsTitle}>
                We are processing your request, please wait
                <RequestLoader/>
              </h2>
            </>
          ) : (
            <h2 className={styles.contactsTitle}>Сontacts:</h2>
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
  );
};

export default Phonebook;
