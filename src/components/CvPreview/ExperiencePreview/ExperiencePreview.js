import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import styles from './ExperiencePreview.module.css';

class ExperiencePreview extends Component {
  render() {
    return (
      <div className={styles.experience}>
        <p className={styles['experience-title']}>Experience</p>
        <hr />
        {this.props.experience.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </div>
    );
  }
}

export default ExperiencePreview;
