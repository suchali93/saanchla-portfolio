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
import {
  ABOUT,
  BLOCKERS_OF_SCAM,
  CULTURE_FIT,
  DETAILS,
  HOME,
  ORIGYNS,
  SIDE_GIGS,
  TEAMS_VR,
} from './common/constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Navigation />
        <Box minHeight="100vh" pt={7}>
          <Switch>
            <Route exact path={DETAILS[HOME].pathname} component={Home} />
            <Route path={DETAILS[SIDE_GIGS].pathname} component={SideGigs} />
            <Route path={DETAILS[ABOUT].pathname} component={About} />
            <Route path={DETAILS[CULTURE_FIT].pathname} component={CultureFit} />
            <Route path={DETAILS[BLOCKERS_OF_SCAM].pathname} component={BOS} />
            <Route path={DETAILS[TEAMS_VR].pathname} component={TeamsVR} />
            <Route path={DETAILS[ORIGYNS].pathname} component={Origyns} />
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
