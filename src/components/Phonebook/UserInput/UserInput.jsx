import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import styles from './UserInput.module.scss';

function UserInput({ onChange, addContact, valueName, valueTel, titel }) {
  const { register, handleSubmit, watch, formState } = useForm();
  const { errors } = formState;
  console.log('errors', errors);

  const onSubmit = data => console.log(data);

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      {/*<input
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
			/>*/}
      <input
        {...register('name', {
          required: true,
          pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          minLength: 2,
          formState: { errors },
        })}
        className={styles.userInput}
        placeholder="Name"
        type="text"
        //name="name"
      />
      {errors.name?.type === 'pattern' && (
        <p style={{ color: 'red' }}>
          Name may contain only letters, apostrophe, dash and spaces. For
          example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan
        </p>
      )}
      {errors.name?.type === 'minLength' && (
        <p style={{ color: 'red' }}>Name should have more than 1 letter</p>
      )}
      {errors.name?.type === 'required' && (
        <p style={{ color: 'red' }}>Name is required </p>
      )}
      <input
        {...register('phone', {
          required: true,
          pattern:
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
          minLength: 2,
          formState: { errors },
        })}
        className={styles.userInput}
        placeholder="Phone"
        type="tel"
        //name="phone"
      />
      {errors.phone?.type === 'pattern' && (
        <p style={{ color: 'red' }}>
          Phone number must be digits and can contain spaces, dashes,
          parentheses and can start with +
        </p>
      )}
      {errors.phone?.type === 'minLength' && (
        <p style={{ color: 'red' }}>Phone should have minimum 10</p>
      )}
      {errors.phone?.type === 'required' && (
        <p style={{ color: 'red' }}>Phone is required </p>
      )}

      <button onSubmit={addContact} className={styles.addContact} type="submit">
        <AiOutlineUserAdd /> {titel}
      </button>

      {/*{valueName && valueTel ? (
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
      )}*/}
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
