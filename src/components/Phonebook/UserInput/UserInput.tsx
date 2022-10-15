import React, {useState, useEffect,} from 'react';
import { useForm } from 'react-hook-form';
import {schemaForNewContact} from '../../../validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import styles from './UserInput.module.scss';

type forUserInput = { addContact:any, titel: string, nameVal: string, phoneVal: string, handleChange:any }

function UserInput({ addContact, titel ,nameVal ,phoneVal, handleChange }: forUserInput ) {
	const [isFormValid, setIsFormValid] = useState(false)

	useEffect(() => {
		if (nameVal && phoneVal) setIsFormValid(true) 
	}, [nameVal, phoneVal])

type FormValues = {
  name: string;
  number: string;
	};

	const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schemaForNewContact) });
	const onSubmit =  (data:FormValues) => addContact() && setIsFormValid(false);

  return (
    <form className={styles.formWrapper} onChange={handleChange} onSubmit={handleSubmit(onSubmit)}>
      <input
				{...register('name')}
        className={styles.userInput}
        placeholder="Name"
				type="text"
				value={nameVal}
			/>
			<p className="error">{errors.name?.message}</p>
      <input
        {...register('number')}
        className={styles.userInput}
        placeholder="Number"
				type="tel"
				value={phoneVal}
			/>
			<p className="error">{errors.number?.message}</p>

      {isFormValid ? (
        <Button
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
