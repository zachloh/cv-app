import React, { Component } from 'react';
import styles from './PersonalInfo.module.css';

class PersonalInfo extends Component {
  render() {
    return (
      <>
        <h3 className={styles.title}>Personal Information</h3>
        <form className={styles['form-container']}>
          <input type="text" name="firstName" placeholder="First name" />
          <input type="text" name="lastName" placeholder="Last name" />
          <input type="text" name="profession" placeholder="Profession" />
          <input type="text" name="address" placeholder="Address" />
          <input type="text" name="contact" placeholder="Contact Number" />
          <input type="text" name="email" placeholder="Email" />
          <textarea
            name="description"
            placeholder="Description"
            className={styles.description}
          />
        </form>
      </>
    );
  }
}

export default PersonalInfo;
