import React, { Component } from 'react';
import styles from './EducationPreview.module.css';

class EducationPreview extends Component {
  render() {
    return (
      <div className={styles.education}>
        <p className={styles['education-title']}>Education</p>
        <hr />
        <p className={styles.course}>Bachelor of Computer Science</p>
        <p>
          <span className={styles.uni}>University of ABC, City A</span>|
          <span className={styles['uni-from']}>2020</span> -{' '}
          <span className={styles['uni-to']}>2021</span>
        </p>
        <p className={styles.course}>Bachelor of Computer Science</p>
        <p>
          <span className={styles.uni}>University of ABC, City A</span>|
          <span className={styles['uni-from']}>2020</span> -{' '}
          <span className={styles['uni-to']}>2021</span>
        </p>
        <p className={styles.course}>Bachelor of Computer Science</p>
        <p>
          <span className={styles.uni}>University of ABC, City A</span>|
          <span className={styles['uni-from']}>2020</span> -{' '}
          <span className={styles['uni-to']}>2021</span>
        </p>
      </div>
    );
  }
}

export default EducationPreview;
