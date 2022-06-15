import React, { Component } from 'react';
import CvForm from './components/CvForm/CvForm';
import Header from './layout/Header';
import './App.css';
import CvPreview from './components/CvPreview/CvPreview';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <CvForm />
          <CvPreview />
        </main>
      </>
    );
  }
}

export default App;
