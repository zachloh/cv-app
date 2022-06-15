import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import styles from './CvForm.module.css';

class CvForm extends Component {
  render() {
    return (
      <div className={styles['cv-form-container']}>
        <PersonalInfo onPersonalInfoChange={this.props.onPersonalInfoChange} />
        <Experience />
        <Education />
        <button className={styles.button}>Reset</button>
      </div>
    );
  }
}

export default CvForm;
