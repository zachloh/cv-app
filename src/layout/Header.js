import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className={styles.header}>CV BUILDER</div>
      </header>
    );
  }
}

export default Header;
