import React, { Component } from 'react';
import styles from './ExperienceItem.module.css';

class ExperienceItem extends Component {
  render() {
    const { position, company, city, from, to, description } =
      this.props.experience;

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
  }
}

export default ExperienceItem;
