import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';
import styles from './Experience.module.css';

class Experience extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  handleInputChange(id, e) {
    const { onExperienceChange } = this.props;
    const { name, value } = e.target;
    onExperienceChange(id, name, value);
  }

  handleDeleteExperience(id) {
    const { onDeleteExperience } = this.props;
    onDeleteExperience(id);
  }

  handleAddExperience() {
    const { onAddExperience } = this.props;
    onAddExperience();
  }

  render() {
    const { experience } = this.props;

    if (experience.length === 0) {
      return (
        <>
          <h3 className={styles.title}>Experience</h3>
          <button
            className={styles.button}
            type="button"
            onClick={this.handleAddExperience}
          >
            Add
          </button>
        </>
      );
    }

    return (
      <>
        <h3 className={styles.title}>Experience</h3>
        {experience.map((exp) => (
          <ExperienceForm
            key={exp.id}
            id={exp.id}
            onExperienceChange={this.handleInputChange}
            onDeleteExperience={this.handleDeleteExperience}
            onAddExperience={this.handleAddExperience}
          />
        ))}
      </>
    );
  }
}

export default Experience;
