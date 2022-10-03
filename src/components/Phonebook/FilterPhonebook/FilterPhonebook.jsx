import React, { memo } from 'react';
import PropTypes from 'prop-types';
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

function FilterPhonebook({ filterValue, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <form>
        <input
          className={styles.userInput}
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
