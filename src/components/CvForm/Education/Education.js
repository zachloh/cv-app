import React, { Component } from 'react';
import EducationForm from './EducationForm';
import styles from './Education.module.css';

class Education extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this);
    this.handleAddEducation = this.handleAddEducation.bind(this);
  }

  handleInputChange(id, e) {
    const { onEducationChange } = this.props;
    const { name, value } = e.target;
    onEducationChange(id, name, value);
  }

  handleDeleteEducation(id) {
    const { onDeleteEducation } = this.props;
    onDeleteEducation(id);
  }

  handleAddEducation() {
    const { onAddEducation } = this.props;
    onAddEducation();
  }

  render() {
    const { education } = this.props;

    if (education.length === 0) {
      return (
        <>
          <h3 className={styles.title}>Education</h3>
          <button
            className={styles.button}
            type="button"
            onClick={this.handleAddEducation}
          >
            Add
          </button>
        </>
      );
    }

    return (
      <>
        <h3 className={styles.title}>Education</h3>
        {education.map((edu) => (
          <EducationForm
            key={edu.id}
            id={edu.id}
            onEducationChange={this.handleInputChange}
            onDeleteEducation={this.handleDeleteEducation}
            onAddEducation={this.handleAddEducation}
          />
        ))}
      </>
    );
  }
}

export default Education;
