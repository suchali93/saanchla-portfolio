import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from '../../theme';
import Navigation from '../Navigation';
import ScrollToTop from '../ScrollToTop';
import Footer from '../Footer';
import Home from '../../pages/Home';
import SideGigs from '../../pages/SideGigs';
import About from '../../pages/About';
import CultureFit from '../../pages/CaseStudies/CultureFit';
import BOS from '../../pages/CaseStudies/BOS';
import VRTeams from '../../pages/CaseStudies/VRTeams';
import Origyns from '../../pages/CaseStudies/Origyns';
import {
  ABOUT,
  BLOCKERS_OF_SCAM,
  CULTURE_FIT,
  DETAILS,
  FOOTER_HEIGHT,
  HOME,
  ORIGYNS,
  SIDE_GIGS,
  VR_TEAMS,
} from '../constants';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Box minHeight={`calc(100vh - ${FOOTER_HEIGHT})`}>
          <Switch>
            <Route exact path={DETAILS[HOME].pathname} component={Home} />
            <Box pt={10}>
              <Route path={DETAILS[SIDE_GIGS].pathname} component={SideGigs} />
              <Route path={DETAILS[ABOUT].pathname} component={About} />
              <Route path={DETAILS[CULTURE_FIT].pathname} component={CultureFit} />
              <Route path={DETAILS[BLOCKERS_OF_SCAM].pathname} component={BOS} />
              <Route path={DETAILS[VR_TEAMS].pathname} component={VRTeams} />
              <Route path={DETAILS[ORIGYNS].pathname} component={Origyns} />
            </Box>
          </Switch>
        </Box>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
