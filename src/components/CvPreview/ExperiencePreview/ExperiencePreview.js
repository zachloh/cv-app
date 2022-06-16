import React from 'react';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import styles from './ExperiencePreview.module.css';

const ExperiencePreview = ({ experience }) => {
  return (
    <div className={styles.experience}>
      <p className={styles['experience-title']}>Experience</p>
      <hr />
      {experience.map((exp) => (
        <ExperienceItem key={exp.id} experience={exp} />
      ))}
    </div>
  );
};

export default ExperiencePreview;
