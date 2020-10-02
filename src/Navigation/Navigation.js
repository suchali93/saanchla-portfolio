import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Container, Grid, SvgIcon, Typography } from '@material-ui/core';

import HideOnScroll from './HideOnScroll';
import Logo from '../logo.png';
import './Navigation.scss';

const Navigation = () => {
  return (
    <HideOnScroll>
      <AppBar style={{ background: 'white', boxShadow: 'none' }} className="nav">
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <img src={Logo} alt="logo" aria-hidden className="logo" />
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
