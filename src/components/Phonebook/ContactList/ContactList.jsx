import React from 'react';
import s from './ContactList.module.css';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import UpdateModal from 'components/common/Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';

function ContactList({
  filter,
  contacts,
  filterByName,
  removeContact,
  updateContact,
}) {
  //const [modalShow, setModalShow] = React.useState(false);
  //const updateContact = () => {
  //  setModalShow(true);
  //};
  return (
    <div className={s.test}>
      <ul className={s.contactList}>
        {(filter &&
          filterByName().map(el => {
            return (
              <li className={s.contactItem} key={el.id}>
                <p>
                  {el.name}: {el.number}
                </p>
                <button
                  name={el.id}
                  onClick={updateContact}
                  className={s.button}
                  type="button"
                >
                  <RiContactsLine /> Update
                </button>
                <button
                  name={el.id}
                  onClick={removeContact}
                  className={s.button}
                  type="button"
                >
                  <AiOutlineUserDelete /> Delete
                </button>
              </li>
            );
          })) ||
          contacts.map(el => {
            return (
              <>
                {/*<UpdateModal
                  name={el.name}
                  phone={el.number}
                  id={el.id}
                  //onChange={handleChange}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />*/}
                <li className={s.contactItem} key={el.id}>
                  <UpdateModal
                    name={el.name}
                    phone={el.number}
                    id={el.id}
                    //onChange={handleChange}
                    //show={modalShow}
                    //onHide={() => setModalShow(false)}
                  />
                  <p>
                    {el.name}: {el.number}
                  </p>
                  <button
                    name={el.id}
                    onClick={updateContact}
                    className={s.buttonUpdate}
                    type="button"
                  >
                    <RiContactsLine /> Update
                  </button>
                  <button
                    name={el.id}
                    onClick={removeContact}
                    className={s.button}
                    type="button"
                  >
                    <AiOutlineUserDelete /> Delete
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}

export default ContactList;

ContactList.prototype = {
  filter: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  filterByName: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
