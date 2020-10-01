import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Link to="/case/bos">
        <Box p={5} className="case">
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                BOS
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Something about BOS
              </Typography>
              <Typography variant="button" gutterBottom>
                Case Study
              </Typography>
            </Grid>
            <Grid item>Image</Grid>
          </Grid>
        </Box>
      </Link>

      <Link to="/case/culture-fit">
        <Box my={5} p={5} className="case">
          <Typography variant="h4" gutterBottom>
            Culture Fit
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Something about Culture Fit
          </Typography>
          <Typography variant="button" gutterBottom>
            Case Study
          </Typography>
        </Box>
      </Link>
      <Link to="/case/teams-vr">
        <Box my={5} p={5} className="case">
          <Typography variant="h4" gutterBottom>
            Teams VR
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Something about Teams VR
          </Typography>
          <Typography variant="button" gutterBottom>
            Case Study
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default Home;
