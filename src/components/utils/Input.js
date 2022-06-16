import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, name, placeholder, onChange, value }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
