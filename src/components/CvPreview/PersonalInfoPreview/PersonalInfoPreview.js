import React from 'react';
import phoneIcon from '../../../assets/images/phone.svg';
import homeIcon from '../../../assets/images/home.svg';
import emailIcon from '../../../assets/images/email.svg';
import styles from './PersonalInfoPreview.module.css';

const PersonalInfoPreview = ({
  personalInfo: {
    firstName,
    lastName,
    profession,
    address,
    contact,
    email,
    description,
  },
}) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.name}>
          <span>{firstName}</span>
          <span> {lastName}</span>
        </p>
        <p className={styles.profession}>{profession}</p>
        <div className={styles.address}>
          <img src={homeIcon} alt="home icon" />
          <span>{address}</span>
        </div>
        <div className={styles.contact}>
          <img src={phoneIcon} alt="phone icon" />
          <span>{contact}</span>
        </div>
        <div className={styles.email}>
          <img src={emailIcon} alt="email icon" />
          <span>{email}</span>
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles['description-title']}>Description</p>
        <hr />
        <p className={styles['description-message']}>{description}</p>
      </div>
    </>
  );
};

export default PersonalInfoPreview;
