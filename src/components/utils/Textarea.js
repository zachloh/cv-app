import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({ name, placeholder, onChange, value }) => {
  return (
    <textarea
      className={styles.textarea}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Textarea;
