import React, { Component } from 'react';
import Header from './layout/Header';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
