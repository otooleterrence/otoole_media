import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import * as projects from 'config/utils';
import Header from 'components/Header';
import ExternalLinks from 'components/ExternalLinks';
import './styles.css';

const Navigation = () => {
  return (
    <nav className='navList'>
      <div className='topSection'>
        <Header />
        <div className='links'>
          {projects.getTypes().map(type => {
            return (
              <div key={type}>
                <h2>{type}</h2>
                {projects.getProjects(type).map(project => (
                  <Link to={project.url} className='navEntry' key={project.id} >
                    <div className='linkRow'>
                      {project.title}
                    </div>
                  </Link>
                ))}
              </div>
            )
          })}
          <div>
            <h2>Talks</h2>
            <OutboundLink
              eventLabel={`Outbound Link to Essential Three js`}
              to='https://www.youtube.com/watch?v=O18Dq-QcfEE'
              target="_blank"
              className='navEntry'
            >
              <div className='linkRow'>
              Essential Three js
              </div>
            </OutboundLink>
          </div>
        </div>
      </div>

      <ExternalLinks />
    </nav>
  );
};

export default Navigation;
