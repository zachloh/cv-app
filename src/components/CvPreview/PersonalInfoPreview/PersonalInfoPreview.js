import React, { Component } from 'react';
import styles from './PersonalInfoPreview.module.css';
import phoneIcon from '../../../assets/images/phone.svg';
import homeIcon from '../../../assets/images/home.svg';
import emailIcon from '../../../assets/images/email.svg';

class PersonalInfoPreview extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <p className={styles.name}>
            <span>Leong Aun</span>
            <span> Loh</span>
          </p>
          <p className={styles.profession}>Software Engineer</p>
          <div className={styles.contact}>
            <img src={phoneIcon} alt="phone icon" />
            <span>0423223132</span>
          </div>
          <div className={styles.address}>
            <img src={homeIcon} alt="home icon" />
            <span>9 Observatory Street, Clyde North</span>
          </div>
          <div className={styles.email}>
            <img src={emailIcon} alt="email icon" />
            <span>blabla@gmail.com</span>
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles['description-title']}>Description</p>
          <hr />
          <p className={styles['description-message']}>
            This is my test description for my fake profession.
          </p>
        </div>
      </>
    );
  }
}

export default PersonalInfoPreview;
