import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';

import { Link } from 'react-router-dom';
import {
  CaseStudyBox,
  CaseStudyTitle,
  CaseStudyContent,
  CaseStudyImage,
} from './styledComponents';

const CaseStudy = ({ to, title, description, imageSrc, backgroundColor, inProgress }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const caseStudyImage = (
    <Grid item lg={6} md={6} sm={12}>
      <CaseStudyImage isMobile={isMobile} src={imageSrc} alt={title} />
    </Grid>
  );
  return (
    <CaseStudyBox my={isMobile ? 3 : 10} backgroundColor={backgroundColor}>
      <Grid container justify="space-between" alignItems="center">
        {isMobile && caseStudyImage}
        <Grid item lg={6} md={6} sm={12}>
          <CaseStudyContent isMobile={isMobile} py={4} pr={4}>
            <CaseStudyTitle>{title}</CaseStudyTitle>
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
        {!isMobile && caseStudyImage}
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
