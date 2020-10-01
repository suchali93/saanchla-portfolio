import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Container } from '@material-ui/core';

import ElevationScroll from './ElevationScroll';
import './Navigation.scss';

const Navigation = () => {
  return (
    <ElevationScroll>
      <AppBar color="" className="nav">
        <Container>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/other" activeClassName="active">
            Other Work
          </NavLink>
          <NavLink exact to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink exact to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navigation;
