import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => {
  return (
    <header className='header'>
      <Link to="/">
        <h1>otoole.media</h1>
      </Link>
    </header>
  );
};
