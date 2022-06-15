import React, { Component } from 'react';
import styles from './Textarea.module.css';

class Textarea extends Component {
  render() {
    const { name, placeholder, onChange, value } = this.props;

    return (
      <textarea
        className={styles.textarea}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  }
}

export default Textarea;
