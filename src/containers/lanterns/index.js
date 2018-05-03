import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MenuIcon from 'components/MenuIcon';
// import Lanterns from 'wrongles/Lanterns';
import './styles.css';

class homeContainer extends Component {

  render() {

    return (
      <main className="iframeContainer">
        <Helmet
          title="lanterns"
          meta={[
            { name: 'author', content: 'Terry' },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: 'otoole.media' },
            { name: 'twitter:creator', content: '@pterryodactyl' },
            { name: 'twitter:title', content: 'lanterns' },
            { name: 'twitter:image', content: 'http://www.otoole.media/images/lanterns-preview.jpg' },

            { property: 'og:title', content: 'lanterns' },
            { property: 'og:site_name', content: 'otoole.media' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'http://www.otoole.media/lanterns/' },
            { property: 'og:description', content: 'three js sketch' },
            { property: 'og:image', content: 'http://www.otoole.media/images/lanterns-preview.jpg' },
            { property: 'og:site_name', content: 'otoole media' },
          ]}
        />
        <MenuIcon />
        {/* <iframe src="http://localhost:8080/" title="lanterns iframe" /> */}
        <iframe src="http://wrongles.otoole.media/lanterns.html" title="lanterns iframe" />
      </main>
    );
  }
}

export default homeContainer;
