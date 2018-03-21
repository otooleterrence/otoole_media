import React, { Component } from 'react';
import Lottie from 'react-lottie';
import { Helmet } from 'react-helmet';
import * as animationData from 'media/animations/logo1.json';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
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
      <main className='mainContainer'>
        <Helmet
          title="Coming Soon"
          meta={[
            { name: 'author', content: 'Terry' },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: 'otoole.media' },
            { name: 'twitter:creator', content: '@pterryodactyl' },
            { name: 'twitter:title', content: 'coming soon' },
            { name: 'twitter:image', content: 'http://www.otoole.media/images/preview.png' },

            { property: 'og:title', content: 'Coming Soon' },
            { property: 'og:site_name', content: 'otoole.media' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'http://www.otoole.media/coming-soon/' },
            { property: 'og:description', content: 'otoole.media redesign' },
            { property: 'og:image', content: 'http://www.otoole.media/images/preview.png' },
            { property: 'og:site_name', content: 'otoole media' },
          ]}
        />
        <Header />
        <Navigation />
        <Lottie options={defaultOptions} />
      </main>
    );
  }
}

export default comingSoonContainer;
