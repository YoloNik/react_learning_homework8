import { useState } from 'react';
import styles from './ContactList.module.scss';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import UpdateModal from 'components/common/Modal/Modal';

ContactList.prototype = {
  filter: PropTypes.string,
  filterByName: PropTypes.string,
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

function ContactList({ filter, contacts, filterByName, removeContact }) {
  const [modalShow, setModalShow] = useState(false);
  const [idforModal, setIdforModal] = useState('');

  const openModal = e => {
    setIdforModal(e.target.name);
    setModalShow(true);
  };

  return (
    <div className={styles.test}>
      <ul className={styles.contactList}>
        {(filter &&
          filterByName().map(el => {
            return (
              <li className={styles.contactItem} key={el.id}>
                {el.id === idforModal && (
                  <UpdateModal
                    name={el.name}
                    phone={el.number}
                    id={idforModal}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                )}
                <p className={styles.user}>
                  {el.name}: {el.number}
                </p>
                <div>
                  <button
                    name={el.id}
                    onClick={openModal}
                    className={styles.buttonUpdate}
                    type="button"
                  >
                    <RiContactsLine /> Update
                  </button>
                  <button
                    name={el.id}
                    onClick={removeContact}
                    className={styles.button}
                    type="button"
                  >
                    <AiOutlineUserDelete /> Delete
                  </button>
                </div>
              </li>
            );
          })) ||
          contacts.map(el => {
            return (
              <li className={styles.contactItem} key={el.id}>
                <div>
                  {el.id === idforModal && (
                    <UpdateModal
                      name={el.name}
                      phone={el.number}
                      id={idforModal}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  )}
                  <p className={styles.user}>
                    {el.name}: {el.number}
                  </p>
                </div>
                <div>
                  <button
                    name={el.id}
                    onClick={openModal}
                    className={styles.buttonUpdate}
                    type="button"
                  >
                    <RiContactsLine /> Update
                  </button>
                  <button
                    name={el.id}
                    onClick={removeContact}
                    className={styles.button}
                    type="button"
                  >
                    <AiOutlineUserDelete /> Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ContactList;
