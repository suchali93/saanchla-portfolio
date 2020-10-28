import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';
import {
  CaseStudyGridContainter,
  CaseStudyBox,
  CaseStudyImage,
} from './styledComponents';

const CaseStudy = ({ to, title, description, imageSrc, backgroundColor, inProgress }) => {
  return (
    <CaseStudyBox mb={10} backgroundColor={backgroundColor}>
      <CaseStudyGridContainter container justify="space-between" alignItems="center">
        <Grid item lg={6} sm={12}>
          <Box p={7}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {description}
            </Typography>
            <Button variant="outlined" component={Link} to={to}>
              {inProgress ? 'Coming Soon' : 'View Case Study'}
            </Button>
          </Box>
        </Grid>
        <Grid item lg={6} sm={12} p={3}>
          <CaseStudyImage src={imageSrc} alt={title} />
        </Grid>
      </CaseStudyGridContainter>
    </CaseStudyBox>
  );
};

CaseStudy.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  inProgress: PropTypes.bool,
};

CaseStudy.defaultProps = {
  backgroundColor: undefined,
  inProgress: false,
};

export default CaseStudy;
