import React from 'react';
import { OutboundLink } from 'react-ga';
import icons from 'media/icons';
import './styles.css';

export default () => {
  return (
    <nav>
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
