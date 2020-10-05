import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import logo from './images/logo.png';
import HideOnScroll from './HideOnScroll';
import { NavBar, Logo } from './styledComponents';

const Navigation = () => {
  return (
    <HideOnScroll>
      <NavBar elevation={0}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <NavLink exact to="/">
              <Logo src={logo} alt="logo" aria-hidden className="logo" />
            </NavLink>
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
          </Grid>
        </Grid>
      </NavBar>
    </HideOnScroll>
  );
};

export default Navigation;
