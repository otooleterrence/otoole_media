import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import Lottie from 'react-lottie';
import icons from 'media/icons';
import * as animationData from 'media/animations/logo1.json';
import './styles.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {},
};

export default () => {
  return (
    <nav>
      {/* <OutboundLink
        eventLabel={`Outbound Link to github`}
        to="https://github.com/otooleterrence"
        target="_blank"
      >
        <img src={icons.github} className='image' alt='to github' />
      </OutboundLink> */}
      <Link to="/home" className='navLinks'>
        <Lottie options={defaultOptions} />
      </Link>
    </nav>
  );
};
