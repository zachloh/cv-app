import React, { Component } from 'react';
import EducationItem from './EducationItem/EducationItem';
import styles from './EducationPreview.module.css';

class EducationPreview extends Component {
  render() {
    return (
      <div className={styles.education}>
        <p className={styles['education-title']}>Education</p>
        <hr />
        {this.props.education.map((edu) => (
          <EducationItem key={edu.id} education={edu} />
        ))}
      </div>
    );
  }
}

export default EducationPreview;
