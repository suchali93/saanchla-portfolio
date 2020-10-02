import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Home.scss';

const CaseStudy = ({ to, title, description, imageSrc }) => {
  return (
    <>
      <Link to={to}>
        <Box mb={7}>
          <Paper elevation={3} className="case">
            <Grid container justify="space-between" alignItems="center">
              <Grid item lg={6} sm={12}>
                <Box p={7}>
                  <Typography variant="h4" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {description}
                  </Typography>
                  <Typography variant="button" gutterBottom>
                    Case Study
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6} sm={12}>
                <img src={imageSrc} alt={title} />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Link>
    </>
  );
};

CaseStudy.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default CaseStudy;
