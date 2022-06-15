import React, { Component } from 'react';
import CvForm from './CvForm/CvForm';
import CvPreview from './CvPreview/CvPreview';

class Main extends Component {
  render() {
    return (
      <main>
        <CvForm />
        <CvPreview />
      </main>
    );
  }
}

export default Main;
