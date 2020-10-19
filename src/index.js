import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from './theme';
import * as serviceWorker from './serviceWorker';
import Navigation from './common/Navigation';
import ScrollToTop from './common/ScrollToTop';
import Home from './pages/Home';
import SideGigs from './pages/SideGigs';
import About from './pages/About';
import CultureFit from './pages/CaseStudies/CultureFit';
import BOS from './pages/CaseStudies/BOS';
import TeamsVR from './pages/CaseStudies/TeamsVR';
import Origyns from './pages/CaseStudies/Origyns';
import Footer from './common/Footer';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navigation />
        <Box pt={10}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/side-gigs" component={SideGigs} />
            <Route path="/about" component={About} />
            <Route path="/case/culture-fit" component={CultureFit} />
            <Route path="/case/bos" component={BOS} />
            <Route path="/case/teams-vr" component={TeamsVR} />
            <Route path="/case/orygyns" component={Origyns} />
          </Switch>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
