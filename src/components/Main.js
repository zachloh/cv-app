import React, { Component } from 'react';
import CvForm from './CvForm/CvForm';
import CvPreview from './CvPreview/CvPreview';
import { v4 as uuidv4 } from 'uuid';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {},
      experience: [
        {
          id: uuidv4(),
        },
      ],
    };

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  handlePersonalInfoChange(prop, newInput) {
    this.setState((prevState) => {
      return {
        personalInfo: {
          ...prevState.personalInfo,
          [prop]: newInput,
        },
      };
    });
  }

  handleExperienceChange(id, prop, newInput) {
    this.setState((prevState) => {
      const newExp = prevState.experience.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            [prop]: newInput,
          };
        }
        return exp;
      });

      return {
        experience: newExp,
      };
    });
  }

  handleDeleteExperience(id) {
    this.setState((prevState) => {
      const newExp = prevState.experience.filter((exp) => exp.id !== id);
      return {
        experience: newExp,
      };
    });
  }

  handleAddExperience() {
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
        },
      ],
    }));
  }

  render() {
    return (
      <main>
        <CvForm
          onPersonalInfoChange={this.handlePersonalInfoChange}
          experience={this.state.experience}
          onExperienceChange={this.handleExperienceChange}
          onDeleteExperience={this.handleDeleteExperience}
          onAddExperience={this.handleAddExperience}
        />
        <CvPreview
          personalInfo={this.state.personalInfo}
          experience={this.state.experience}
        />
      </main>
    );
  }
}

export default Main;
