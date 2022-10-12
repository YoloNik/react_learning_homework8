import React from 'react';
import styles from './UserInput.module.scss';
import PropTypes from 'prop-types';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Button } from 'react-bootstrap';

function UserInput({ onChange, addContact, valueName, valueTel, titel }) {
  return (
    <form className={styles.formWrapper}>
      <input
        className={styles.userInput}
        placeholder="Name"
        type="text"
        value={valueName}
        name="name"
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        className={styles.userInput}
        onChange={onChange}
        placeholder="Phone"
        value={valueTel}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      {valueName && valueTel ? (
        <Button
          onClick={addContact}
          className={styles.addContact}
          type="submit"
        >
          <AiOutlineUserAdd /> {titel}
        </Button>
      ) : (
        <p style={{ margin: 0 }}>
          Add contact details to add it to the contact list
        </p>
      )}
    </form>
  );
}

export default UserInput;

UserInput.prototype = {
  onChange: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  valueTel: PropTypes.string.isRequired,
};
