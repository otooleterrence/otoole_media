import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import homeContainer from 'containers/homeContainer';
import ExtremeTelepathy from 'containers/ExtremeTelepathy';
import blackout from 'containers/blackout';
import lanterns from 'containers/lanterns';
import { gaId } from 'config';

ReactGA.initialize(gaId); // initialize google analytics
ReactGA.pageview(window.location.pathname);

const history = createHistory(); // must use history and listener for ga
history.listen((location) => {
  ReactGA.pageview(location.pathname);
});

/**
 * For cleanliness the only url param will be to find a project page
 *    e.g. otoole.media/lanterns
 *         otoole.media/pair-it
 *         otoole.media/wright-window
 * home will be the standard '/'
 *    e.g. otoole.media
 * project pages should really just focus on the media, not on the interface
 */

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={homeContainer} />
          <Route exact path="/extremetelepathy" component={ExtremeTelepathy} />
          <Route exact path="/home" component={homeContainer} />
          <Route exact path="/coming-soon" component={homeContainer} />
          <Route exact path="/blackout" component={blackout} />
          <Route exact path="/lanterns" component={lanterns} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
