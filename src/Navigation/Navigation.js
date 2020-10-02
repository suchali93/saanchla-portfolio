import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Container, SvgIcon } from '@material-ui/core';

import ElevationScroll from './ElevationScroll';
import { ReactComponent as Logo } from '../logo.svg';
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
          <SvgIcon component={Logo} viewBox="0 0 325 325" />
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navigation;
