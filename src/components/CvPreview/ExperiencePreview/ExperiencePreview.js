import React, { Component } from 'react';
import styles from './ExperiencePreview.module.css';

class ExperiencePreview extends Component {
  render() {
    return (
      <div className={styles.experience}>
        <p className={styles['experience-title']}>Experience</p>
        <hr />
        <p className={styles['job-title']}>Software Engineer</p>
        <p>
          <span className={styles['job-location']}>Company ABC, City A</span>|
          <span className={styles['job-from']}>2020</span> -{' '}
          <span className={styles['job-to']}>2021</span>
        </p>
        <p className={styles['job-description']}>
          This is what I did for my position here. I did bla, bla and bla bla.
        </p>
        <p className={styles['job-title']}>Software Engineer</p>
        <p>
          <span className={styles['job-location']}>Company ABC, City A</span>|
          <span className={styles['job-from']}>2020</span> -{' '}
          <span className={styles['job-to']}>2021</span>
        </p>
        <p className={styles['job-description']}>
          This is what I did for my position here. I did bla, bla and bla bla.
        </p>
        <p className={styles['job-title']}>Software Engineer</p>
        <p>
          <span className={styles['job-location']}>Company ABC, City A</span>|
          <span className={styles['job-from']}>2020</span> -{' '}
          <span className={styles['job-to']}>2021</span>
        </p>
        <p className={styles['job-description']}>
          This is what I did for my position here. I did bla, bla and bla bla.
        </p>
      </div>
    );
  }
}

export default ExperiencePreview;
