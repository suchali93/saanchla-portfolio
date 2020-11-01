import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './images/logo.png';
import HideOnScroll from './HideOnScroll';
import { Logo, MobileNav, NavBar } from './styledComponents';
import { ABOUT, DETAILS, HOME, SIDE_GIGS } from '../constants';

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsMenuOpen(isOpen);
  };
  return isMobile ? (
    <NavBar elevation={0}>
      <Toolbar>
        <IconButton onClick={toggleDrawer(true)} size="small" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={isMenuOpen} onClose={toggleDrawer(false)}>
          <MobileNav
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button key={HOME}>
                <NavLink exact to={DETAILS[HOME].pathname} className="logo">
                  <Logo isMobile={isMobile} src={logo} alt="logo" aria-hidden />
                </NavLink>
              </ListItem>
              <ListItem button key={HOME}>
                <NavLink exact to={DETAILS[HOME].pathname} activeClassName="active">
                  {HOME}
                </NavLink>
              </ListItem>
              <ListItem button key={SIDE_GIGS}>
                <NavLink exact to={DETAILS[SIDE_GIGS].pathname} activeClassName="active">
                  {SIDE_GIGS}
                </NavLink>
              </ListItem>
              <ListItem button key={ABOUT}>
                <NavLink exact to={DETAILS[ABOUT].pathname} activeClassName="active">
                  {ABOUT}
                </NavLink>
              </ListItem>
            </List>
          </MobileNav>
        </Drawer>
      </Toolbar>
    </NavBar>
  ) : (
    <HideOnScroll>
      <NavBar elevation={0}>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <NavLink exact to={DETAILS[HOME].pathname}>
            <Logo src={logo} alt="logo" aria-hidden />
          </NavLink>
          <Box>
            <NavLink exact to={DETAILS[HOME].pathname} activeClassName="active">
              {HOME}
            </NavLink>
            <NavLink exact to={DETAILS[SIDE_GIGS].pathname} activeClassName="active">
              {SIDE_GIGS}
            </NavLink>
            <NavLink exact to={DETAILS[ABOUT].pathname} activeClassName="active">
              {ABOUT}
            </NavLink>
          </Box>
        </Box>
      </NavBar>
    </HideOnScroll>
  );
};

export default Navigation;
