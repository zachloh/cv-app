import React, { Component } from 'react';
import styles from './Education.module.css';

class Education extends Component {
  render() {
    return (
      <>
        <h3 className={styles.title}>Education</h3>
        <form className={styles['form-container']}>
          <input type="text" name="university" placeholder="University" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="degree" placeholder="Degree" />
          <input type="text" name="from" placeholder="From" />
          <input type="text" name="to" placeholder="To" />
          <button type="button">Delete</button>
          <button type="button">Add</button>
        </form>
      </>
    );
  }
}

export default Education;
