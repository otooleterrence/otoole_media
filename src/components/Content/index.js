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

    return (
      <div className='contentBox'>
        <Lottie options = { defaultOptions } />
      </div>
    );
  }
}

export default comingSoonContainer;
