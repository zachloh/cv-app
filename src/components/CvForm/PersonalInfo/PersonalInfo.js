import React from 'react';
import Input from '../../utils/Input';
import Textarea from '../../utils/Textarea';
import styles from './PersonalInfo.module.css';

const PersonalInfo = ({ onPersonalInfoChange, personalInfo }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onPersonalInfoChange(name, value);
  };

  const {
    firstName,
    lastName,
    profession,
    address,
    contact,
    email,
    description,
  } = personalInfo;

  return (
    <>
      <h3 className={styles.title}>Personal Information</h3>
      <form className={styles['form-container']}>
        <Input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={handleInputChange}
          value={firstName}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={handleInputChange}
          value={lastName}
        />
        <Input
          type="text"
          name="profession"
          placeholder="Profession"
          onChange={handleInputChange}
          value={profession}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
          value={address}
        />
        <Input
          type="text"
          name="contact"
          placeholder="Contact Number"
          onChange={handleInputChange}
          value={contact}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={email}
        />
        <Textarea
          name="description"
          placeholder="Description"
          onChange={handleInputChange}
          value={description}
        />
      </form>
    </>
  );
};

export default PersonalInfo;
