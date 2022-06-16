import React from 'react';
import PersonalInfoPreview from './PersonalInfoPreview/PersonalInfoPreview';
import ExperiencePreview from './ExperiencePreview/ExperiencePreview';
import EducationPreview from './EducationPreview/EducationPreview';
import styles from './CvPreview.module.css';

const CvPreview = ({ personalInfo, experience, education }) => {
  return (
    <div className={styles['cv-preview-container']}>
      <PersonalInfoPreview personalInfo={personalInfo} />
      <ExperiencePreview experience={experience} />
      <EducationPreview education={education} />
    </div>
  );
};

export default CvPreview;
