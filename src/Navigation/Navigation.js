import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box } from '@material-ui/core';

import ElevationScroll from './ElevationScroll';
import './navigation.scss';

const Navigation = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <Box mx={10} className="nav">
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
        </Box>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navigation;
