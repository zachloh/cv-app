import React from 'react';
import styles from './EducationItem.module.css';

const EducationItem = ({ education }) => {
  const { university, city, degree, from, to } = education;

  return (
    <>
      <p className={styles.course}>{degree}</p>
      <p>
        <span className={styles.uni}>
          {university}
          {university ? ',' : ''} {city}
        </span>
        {from || to ? '|' : ''}
        <span className={styles['uni-from']}>{from} </span>{' '}
        {from || to ? '-' : ''} <span className={styles['uni-to']}>{to}</span>
      </p>
    </>
  );
};

export default EducationItem;
