import React from 'react';
import { Container, Grid, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FooterWrapper } from './styledComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>What would you like to see me solve?</Grid>
          <Grid item>
            <IconButton
              href="https://www.linkedin.com/in/sanchala-tripathi"
              disableRipple
              aria-label="linked in"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
