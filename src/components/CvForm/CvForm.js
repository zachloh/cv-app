import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import styles from './CvForm.module.css';

class CvForm extends Component {
  render() {
    const {
      personalInfo,
      onPersonalInfoChange,
      experience,
      onExperienceChange,
      onDeleteExperience,
      onAddExperience,
      education,
      onEducationChange,
      onDeleteEducation,
      onAddEducation,
      onReset,
    } = this.props;

    return (
      <div className={styles['cv-form-container']}>
        <PersonalInfo
          personalInfo={personalInfo}
          onPersonalInfoChange={onPersonalInfoChange}
        />
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
        <button className={styles.button} onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default CvForm;
