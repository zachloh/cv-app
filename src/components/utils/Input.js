import React, { Component } from 'react';
import styles from './Input.module.css';

class Input extends Component {
  render() {
    const { type, name, placeholder, onChange, value } = this.props;

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
  }
}

export default Input;
