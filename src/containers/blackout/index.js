import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import './styles.css';

class homeContainer extends Component {

  render() {

    return (
      <main className='mainContainer'>
        <Helmet
          title="black out"
          meta={[
            { name: 'author', content: 'Terry' },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: 'otoole.media' },
            { name: 'twitter:creator', content: '@pterryodactyl' },
            { name: 'twitter:title', content: 'otoole_media' },
            { name: 'twitter:image', content: 'http://www.otoole.media/images/preview.png' },

            { property: 'og:title', content: 'otoole_media' },
            { property: 'og:site_name', content: 'otoole.media' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'http://www.otoole.media/coming-soon/' },
            { property: 'og:description', content: 'otoole.media' },
            { property: 'og:image', content: 'http://www.otoole.media/images/preview.png' },
            { property: 'og:site_name', content: 'otoole media' },
          ]}
        />
        <Header />
        <div className='content'>

        </div>
      </main>
    );
  }
}

export default homeContainer;
