import React from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { FooterWrapper } from './styledComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>Test. Iterate. Rinse. Repeat.</Grid>
          <Grid item>
            <IconButton
              href="https://www.linkedin.com/in/sanchala-tripathi"
              disableRipple
              aria-label="linked in"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:sanch.tripathi@gmail.com"
              disableRipple
              aria-label="email"
            >
              <EmailIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
