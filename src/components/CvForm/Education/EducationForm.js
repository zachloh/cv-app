import React from 'react';
import Input from '../../utils/Input';
import styles from './EducationForm.module.css';

const EducationForm = ({
  id,
  onAddEducation,
  onEducationChange,
  onDeleteEducation,
}) => {
  onEducationChange = onEducationChange.bind(null, id);
  onDeleteEducation = onDeleteEducation.bind(null, id);

  return (
    <form className={styles['form-container']}>
      <Input
        type="text"
        name="university"
        placeholder="University"
        onChange={onEducationChange}
      />
      <Input
        type="text"
        name="city"
        placeholder="City"
        onChange={onEducationChange}
      />
      <Input
        type="text"
        name="degree"
        placeholder="Degree"
        onChange={onEducationChange}
      />
      <Input
        type="text"
        name="from"
        placeholder="From"
        onChange={onEducationChange}
      />
      <Input
        type="text"
        name="to"
        placeholder="To"
        onChange={onEducationChange}
      />
      <button type="button" onClick={onDeleteEducation}>
        Delete
      </button>
      <button type="button" onClick={onAddEducation}>
        Add
      </button>
    </form>
  );
};

export default EducationForm;
