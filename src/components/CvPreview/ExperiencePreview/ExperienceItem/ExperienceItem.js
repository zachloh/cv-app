import React from 'react';
import styles from './ExperienceItem.module.css';

const ExperienceItem = ({ experience }) => {
  const { position, company, city, from, to, description } = experience;

  return (
    <>
      <p className={styles['job-title']}>{position}</p>
      <p>
        <span className={styles['job-location']}>
          {company}
          {company ? ',' : ''} {city}
        </span>
        {from || to ? '|' : ''}
        <span className={styles['job-from']}>{from} </span>{' '}
        {from || to ? '-' : ''} <span className={styles['job-to']}>{to}</span>
      </p>
      <p className={styles['job-description']}>{description}</p>
    </>
  );
};

export default ExperienceItem;
