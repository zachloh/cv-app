import React, { Component } from 'react';
import Input from '../../utils/Input';
import Textarea from '../../utils/Textarea';
import styles from './PersonalInfo.module.css';

class PersonalInfo extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.props.onPersonalInfoChange(name, value);
  };

  render() {
    const {
      firstName,
      lastName,
      profession,
      address,
      contact,
      email,
      description,
    } = this.props.personalInfo;

    return (
      <>
        <h3 className={styles.title}>Personal Information</h3>
        <form className={styles['form-container']}>
          <Input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={this.handleInputChange}
            value={firstName}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.handleInputChange}
            value={lastName}
          />
          <Input
            type="text"
            name="profession"
            placeholder="Profession"
            onChange={this.handleInputChange}
            value={profession}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            onChange={this.handleInputChange}
            value={address}
          />
          <Input
            type="text"
            name="contact"
            placeholder="Contact Number"
            onChange={this.handleInputChange}
            value={contact}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={email}
          />
          <Textarea
            name="description"
            placeholder="Description"
            onChange={this.handleInputChange}
            value={description}
          />
        </form>
      </>
    );
  }
}

export default PersonalInfo;
