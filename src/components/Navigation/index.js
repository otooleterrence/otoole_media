import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import * as projects from 'config/utils';
import icons from 'media/icons';
import './styles.css';

export default () => {
  return (
    <nav className='navList'>
      <div className='topSection'>
        <Link to="/">
          <h1>otoole.media</h1>
        </Link>
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
        </div>
      </div>
      <div className='navLinks'>
        <a href="mailto:otooleterrence@gmail.com" className='mailLink'>@</a>
        <OutboundLink
          eventLabel={`Outbound Link to github`}
          to="https://github.com/otooleterrence"
          target="_blank"
        >
          <img src={icons.github} className='image' alt='to github' />
        </OutboundLink>
        <OutboundLink
          eventLabel={`Outbound Link to github`}
          to="https://www.linkedin.com/in/otooleterrence"
          target="_blank"
        >
          <img src={icons.linkedin} className='image' alt='to linkedin' />
        </OutboundLink>
        <OutboundLink
          eventLabel={`Outbound Link to github`}
          to="https://twitter.com/pterryodactyl"
          target="_blank"
        >
          <img src={icons.twitter} className='image' alt='to twitter' />
        </OutboundLink>
      </div>
    </nav>
  );
};
