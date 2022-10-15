import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import styles from '../UserInput/UserInput.module.scss';

//const style = {
//  width: '70%',
//  height: '30px',
//  border: '1px',
//  borderRadius: '16px',
//  backgroundColor: '#E8EDE7',
//	paddingLeft: '10px',
//	:active,
//	:hover,
//	:focus {
//		outline: 3px solid #f0bb29;
//};

function FilterPhonebook({ filterValue, onChange }:{filterValue:string, onChange:any}) {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>
        Find contacts by name <BsSearch />
      </h3>
      <form>
        <input
          className={styles.filter}
          placeholder="Search contact"
          type="text"
          name="filter"
          value={filterValue}
          onChange={onChange}
        />
      </form>
    </>
  );
}

export default memo(FilterPhonebook);

FilterPhonebook.prototype = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
