import React, { Component } from 'react';
import CvForm from './components/CvForm/CvForm';
import Header from './layout/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <CvForm />
        </main>
      </>
    );
  }
}

export default App;
