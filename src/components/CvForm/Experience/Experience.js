import React, { Component } from 'react';
import styles from './Experience.module.css';

class Experience extends Component {
  render() {
    return (
      <>
        <h3 className={styles.title}>Experience</h3>
        <form className={styles['form-container']}>
          <input type="text" name="position" placeholder="Position" />
          <input type="text" name="company" placeholder="Company" />
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="from" placeholder="From" />
          <input type="text" name="to" placeholder="To" />
          <textarea
            name="description"
            placeholder="Job Description"
            className={styles.description}
          />
          <button type="button">Delete</button>
          <button type="button">Add</button>
        </form>
      </>
    );
  }
}

export default Experience;
