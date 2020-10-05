import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FooterWrapper } from './styledComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Box my={10}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>What would you like to see me solve?</Grid>
            <Grid item>
              <LinkedInIcon />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
