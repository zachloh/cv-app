import React from 'react';
import EducationItem from './EducationItem/EducationItem';
import styles from './EducationPreview.module.css';

const EducationPreview = ({ education }) => {
  return (
    <div className={styles.education}>
      <p className={styles['education-title']}>Education</p>
      <hr />
      {education.map((edu) => (
        <EducationItem key={edu.id} education={edu} />
      ))}
    </div>
  );
};

export default EducationPreview;
