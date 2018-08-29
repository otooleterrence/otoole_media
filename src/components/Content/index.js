import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from 'media/animations/logo1.json';
import './styles.css';

class comingSoonContainer extends Component {

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {},
    };
    const width = window.innerWidth;
    const isDesktop = width >=450;

    return (
      <div className='contentBox'>
        {isDesktop && <Lottie options = { defaultOptions } />}
      </div>
    );
  }
}

export default comingSoonContainer;
