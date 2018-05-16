import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <Link to="/" className='header'>
      <h1>otoole.media</h1>
    </Link>
  );
};

export default Header;
