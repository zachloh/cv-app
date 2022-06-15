import React, { Component } from 'react';
import Input from '../../utils/Input';
import Textarea from '../../utils/Textarea';
import styles from './ExperienceForm.module.css';

class ExperienceForm extends Component {
  render() {
    const { id, onAddExperience } = this.props;
    let onExperienceChange = this.props.onExperienceChange.bind(null, id);
    let onDeleteExperience = this.props.onDeleteExperience.bind(null, id);

    return (
      <form className={styles['form-container']}>
        <Input
          type="text"
          name="position"
          placeholder="Position"
          onChange={onExperienceChange}
        />
        <Input
          type="text"
          name="company"
          placeholder="Company"
          onChange={onExperienceChange}
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          onChange={onExperienceChange}
        />
        <Input
          type="text"
          name="from"
          placeholder="From"
          onChange={onExperienceChange}
        />
        <Input
          type="text"
          name="to"
          placeholder="To"
          onChange={onExperienceChange}
        />
        <Textarea
          name="description"
          placeholder="Job Description"
          onChange={onExperienceChange}
        />
        <button type="button" onClick={onDeleteExperience}>
          Delete
        </button>
        <button type="button" onClick={onAddExperience}>
          Add
        </button>
      </form>
    );
  }
}

export default ExperienceForm;
