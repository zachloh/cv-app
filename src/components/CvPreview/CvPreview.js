import React, { Component } from 'react';
import PersonalInfoPreview from './PersonalInfoPreview/PersonalInfoPreview';
import styles from './CvPreview.module.css';
import ExperiencePreview from './ExperiencePreview/ExperiencePreview';
import EducationPreview from './EducationPreview/EducationPreview';

class CvPreview extends Component {
  render() {
    return (
      <div className={styles['cv-preview-container']}>
        <PersonalInfoPreview />
        <ExperiencePreview />
        <EducationPreview />
      </div>
    );
  }
}

export default CvPreview;