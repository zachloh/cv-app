import React, { Component } from 'react';
import styles from './Textarea.module.css';

class Textarea extends Component {
  render() {
    const { name, placeholder, onChange } = this.props;

    return (
      <textarea
        className={styles.textarea}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default Textarea;
