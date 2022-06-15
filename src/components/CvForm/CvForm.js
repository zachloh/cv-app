import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import styles from './CvForm.module.css';

class CvForm extends Component {
  render() {
    const {
      onPersonalInfoChange,
      experience,
      onExperienceChange,
      onDeleteExperience,
      onAddExperience,
      education,
      onEducationChange,
      onDeleteEducation,
      onAddEducation,
    } = this.props;

    return (
      <div className={styles['cv-form-container']}>
        <PersonalInfo onPersonalInfoChange={onPersonalInfoChange} />
        <Experience
          experience={experience}
          onExperienceChange={onExperienceChange}
          onDeleteExperience={onDeleteExperience}
          onAddExperience={onAddExperience}
        />
        <Education
          education={education}
          onEducationChange={onEducationChange}
          onDeleteEducation={onDeleteEducation}
          onAddEducation={onAddEducation}
        />
        <button className={styles.button}>Reset</button>
      </div>
    );
  }
}

export default CvForm;
