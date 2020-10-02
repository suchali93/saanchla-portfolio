import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <Container className="footer">
      <Box my={10}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>What would you like to see me solve?</Grid>
          <Grid item>
            <LinkedInIcon />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
