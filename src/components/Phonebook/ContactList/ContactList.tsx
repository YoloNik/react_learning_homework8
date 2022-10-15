import React,{ useState } from 'react';
import styles from './ContactList.module.scss';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import UpdateModal from '../../../components/common/Modal/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

ContactList.prototype = {
  filter: PropTypes.string,
  filterByName: PropTypes.func,
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

function ContactList({ filter, contacts, filterByName, removeContact }:{filter:string, contacts:any, filterByName:any,removeContact:any}) {
  const [modalShow, setModalShow] = useState(false);
  const [idforModal, setIdforModal] = useState('');

  const openModal = (e:any) => {
    setIdforModal(e.target.name);
    setModalShow(true);
  };

  return (
    <div>
      <ul className={styles.contactList}>
        {(filter &&
          filterByName().map((el:any) => {
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
                  <Button
                    name={el.id}
                    onClick={openModal}
                    className={styles.buttonUpdate}
                    type="button"
                  >
                    <RiContactsLine /> Update
                  </Button>
                  <Button
                    name={el.id}
                    onClick={removeContact}
                    className={styles.buttonDelete}
                    type="button"
                  >
                    <AiOutlineUserDelete /> Delete
                  </Button>
                </div>
              </li>
            );
          })) ||
          contacts.map((el:any) => {
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
                  <p className={styles.user}>Name: {el.name}</p>
                  <p className={styles.user}>Number: {el.number}</p>
                </div>
                <div>
                  <Button
                    name={el.id}
                    onClick={openModal}
                    className={styles.buttonUpdate}
                  >
                    <RiContactsLine /> Update
                  </Button>
                  <Button
                    name={el.id}
                    onClick={removeContact}
                    className={styles.buttonDelete}
                  >
                    <AiOutlineUserDelete /> Delete
                  </Button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ContactList;
