import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar } from '@material-ui/core';

import ElevationScroll from './ElevationScroll';
import './navigation.scss';

const Navigation = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <div className="nav">
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
        </div>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navigation;
