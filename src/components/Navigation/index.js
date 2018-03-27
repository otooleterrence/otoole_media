import React from 'react';
import { Link } from 'react-router-dom';
import { contentList } from 'config';
import './styles.css';

export default () => {
  return (
    <nav className='navList'>
      {contentList.map(project => (
        <div className='linkRow' >
          <Link to={project.url} className='navEntry'>{project.title}</Link>
        </div>
      ))
      }
    </nav>
  );
};
