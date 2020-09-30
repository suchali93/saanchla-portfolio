import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Home from './Home';
import BOS from './caseStudies/BOS/BOS';
import CultureFit from './caseStudies/CultureFit';
import './index.css';
import Navigation from './Navigation';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/case/bos" component={BOS} />
        <Route path="/case/culture-fit" component={CultureFit} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
