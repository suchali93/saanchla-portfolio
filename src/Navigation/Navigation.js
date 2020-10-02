import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Container, Grid, SvgIcon } from '@material-ui/core';

import HideOnScroll from './HideOnScroll';
import { ReactComponent as Logo } from '../logo.svg';
import './Navigation.scss';

const Navigation = () => {
  return (
    <HideOnScroll>
      <AppBar color="" className="nav">
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <SvgIcon component={Logo} viewBox="0 0 325 325" />
              <span className="name">Saanchla Tripathi</span>
            </Grid>
            <Grid item>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/side-gigs" activeClassName="active">
                Side Gigs
              </NavLink>
              <NavLink exact to="/about" activeClassName="active">
                About
              </NavLink>
              <NavLink exact to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navigation;
