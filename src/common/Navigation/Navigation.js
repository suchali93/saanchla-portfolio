import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from './images/logo.svg';
import HideOnScroll from './HideOnScroll';
import { Logo, MobileNav, MobileNavList, NavBar } from './styledComponents';
import { ABOUT, DETAILS, HOME, SIDE_GIGS, WORK } from '../constants';

const Navigation = ({ workRef }) => {
  const theme = useTheme();
  const showHamburger = useMediaQuery(theme.breakpoints.down('md'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    setIsMenuOpen(isOpen);
  };
  return showHamburger ? (
    <NavBar showHamburger={showHamburger} elevation={0}>
      <MobileNav isMenuOpen={isMenuOpen}>
        <Box display="flex" justifyContent="space-between" ml={1} mr={3} my={1}>
          <NavLink
            exact
            onClick={toggleMenu(false)}
            to={DETAILS[HOME].pathname}
            className="logo"
          >
            <Logo src={logo} alt="logo" aria-hidden />
          </NavLink>
          <IconButton onClick={toggleMenu(!isMenuOpen)} size="small" aria-label="menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <MobileNavList
          role="presentation"
          isMenuOpen={isMenuOpen}
          onClick={toggleMenu(false)}
          onKeyDown={toggleMenu(false)}
        >
          <List>
            <ListItem button key={HOME}>
              <NavLink exact to={DETAILS[HOME].pathname} activeClassName="active">
                {HOME}
              </NavLink>
            </ListItem>
            {/* <ListItem button key={SIDE_GIGS}>
              <NavLink to={DETAILS[SIDE_GIGS].pathname} activeClassName="active">
                {SIDE_GIGS}
              </NavLink>
            </ListItem> */}
            {/* <ListItem button key={WORK}>
              <NavLink
                to={() => workRef?.current?.scrollIntoView()}
                activeClassName="active"
              >
                {WORK}
              </NavLink>
            </ListItem> */}
            <ListItem button key={ABOUT}>
              <NavLink to={DETAILS[ABOUT].pathname} activeClassName="active">
                {ABOUT}
              </NavLink>
            </ListItem>
          </List>
        </MobileNavList>
      </MobileNav>
    </NavBar>
  ) : (
    <HideOnScroll>
      <NavBar elevation={0}>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          my={2}
        >
          <NavLink exact to={DETAILS[HOME].pathname} className="logo">
            <Logo src={logo} alt="logo" aria-hidden />
          </NavLink>
          <Box className="h-100 d-flex align-items-center">
            <NavLink exact to={DETAILS[HOME].pathname} activeClassName="active">
              {HOME}
            </NavLink>
            {/* <NavLink exact to={DETAILS[SIDE_GIGS].pathname} activeClassName="active">
              {SIDE_GIGS}
            </NavLink> */}
            {/* <NavLink
              to={() => workRef?.current?.scrollIntoView()}
              activeClassName="active"
            >
              {WORK}
            </NavLink> */}
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
