import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { CaseStudyBox, CaseStudyContent, CaseStudyImage } from './styledComponents';

const CaseStudy = ({ to, title, description, imageSrc, backgroundColor, inProgress }) => {
  return (
    <CaseStudyBox mb={10} backgroundColor={backgroundColor}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item lg={6} md={6} sm={12}>
          <CaseStudyContent p={4}>
            <Typography variant="h2" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to={to}
              aria-label={
                inProgress
                  ? `${title} case study coming soon`
                  : `View ${title} case study`
              }
            >
              {inProgress ? 'Coming Soon' : 'View Case Study'}
            </Button>
          </CaseStudyContent>
        </Grid>
        <Grid item lg={6} md={6} sm={12} p={3}>
          <CaseStudyImage src={imageSrc} alt={title} />
        </Grid>
      </Grid>
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
  backgroundColor: '#fff',
  inProgress: false,
};

export default CaseStudy;
