import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Home.scss';

const CaseStudy = ({ to, title, description, imageSrc }) => {
  return (
    <>
      <Link to={to}>
        <Box px={10} py={5} mb={8} className="case">
          <Grid container justify="space-between" alignItems="center" spacing={4}>
            <Grid item lg={6} sm={12}>
              <Typography variant="h4" gutterBottom>
                {title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {description}
              </Typography>
              <Typography variant="button" gutterBottom>
                Case Study
              </Typography>
            </Grid>
            <Grid item lg={6} sm={12}>
              <img src={imageSrc} alt={title} />
            </Grid>
          </Grid>
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
