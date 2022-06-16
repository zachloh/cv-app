import React from 'react';
import EducationForm from './EducationForm';
import styles from './Education.module.css';

const Education = ({
  onEducationChange,
  onDeleteEducation,
  onAddEducation,
  education,
}) => {
  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    onEducationChange(id, name, value);
  };

  const handleDeleteEducation = (id) => {
    onDeleteEducation(id);
  };

  const handleAddEducation = () => {
    onAddEducation();
  };

  if (education.length === 0) {
    return (
      <>
        <h3 className={styles.title}>Education</h3>
        <button
          className={styles.button}
          type="button"
          onClick={handleAddEducation}
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
          onEducationChange={handleInputChange}
          onDeleteEducation={handleDeleteEducation}
          onAddEducation={handleAddEducation}
        />
      ))}
    </>
  );
};

export default Education;
