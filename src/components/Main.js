import React, { Component } from 'react';
import CvForm from './CvForm/CvForm';
import CvPreview from './CvPreview/CvPreview';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        profession: '',
        address: '',
        contact: '',
        email: '',
        description: '',
      },
    };

    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
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

  render() {
    return (
      <main>
        <CvForm onPersonalInfoChange={this.handlePersonalInfoChange} />
        <CvPreview personalInfo={this.state.personalInfo} />
      </main>
    );
  }
}

export default Main;
