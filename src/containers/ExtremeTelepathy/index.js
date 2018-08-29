import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';

class ExtremeTelepathy extends Component {

  render() {

    return (
      <main className='telepathyContainer'>
        <Helmet
          title="extreme telepathy"
          meta={[
            { name: 'author', content: 'Terry' },

            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: 'extremetelepathy.com' },
            { name: 'twitter:creator', content: '@ex_telepathy' },
            { name: 'twitter:title', content: 'otoole_media' },
            { name: 'twitter:image', content: 'http://www.otoole.media/images/preview.png' },

            { property: 'og:title', content: 'extreme telepathy' },
            { property: 'og:site_name', content: 'extremetelepathy.com' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'extremetelepathy.com' },
            { property: 'og:description', content: 'extreme telepathy' },
            { property: 'og:image', content: 'http://www.otoole.media/images/preview.png' },
            { property: 'og:site_name', content: 'otoole media' },
          ]}
        />
        <div>
          <h1>extreme telepathy</h1>
          <h2>coming soon&hellip;</h2>
          <a href="mailto:telepath@extremetelepathy.com">contact</a>
        </div>
      </main>
    );
  }
}

export default ExtremeTelepathy;
