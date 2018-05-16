import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => {
  return (
    <header className="headerIcon">
      <Link to="/" title="otoole media">
        <h1>o</h1>
      </Link>
    </header>
  );
};
