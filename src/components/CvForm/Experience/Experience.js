import React from 'react';
import ExperienceForm from './ExperienceForm';
import styles from './Experience.module.css';

const Experience = ({
  onExperienceChange,
  onDeleteExperience,
  onAddExperience,
  experience,
}) => {
  const handleInputChange = (id, e) => {
    const { name, value } = e.target;
    onExperienceChange(id, name, value);
  };

  const handleDeleteExperience = (id) => {
    onDeleteExperience(id);
  };

  const handleAddExperience = () => {
    onAddExperience();
  };

  if (experience.length === 0) {
    return (
      <>
        <h3 className={styles.title}>Experience</h3>
        <button
          className={styles.button}
          type="button"
          onClick={handleAddExperience}
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
          onExperienceChange={handleInputChange}
          onDeleteExperience={handleDeleteExperience}
          onAddExperience={handleAddExperience}
        />
      ))}
    </>
  );
};

export default Experience;
