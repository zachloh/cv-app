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
    return (
      <>
        <h3 className={styles.title}>Personal Information</h3>
        <form className={styles['form-container']}>
          <Input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            name="profession"
            placeholder="Profession"
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            name="address"
            placeholder="Address"
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            name="contact"
            placeholder="Contact Number"
            onChange={this.handleInputChange}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleInputChange}
          />
          <Textarea
            name="description"
            placeholder="Description"
            onChange={this.handleInputChange}
          />
        </form>
      </>
    );
  }
}

export default PersonalInfo;
