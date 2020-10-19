import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Typography } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { ProjectGridContainter, ProjectBox, ProjectImage } from './styledComponents';

const Project = ({ to, title, description, imageSrc, backgroundColor, inProgress }) => {
  return (
    <ProjectBox mb={10} backgroundColor={backgroundColor}>
      <ProjectGridContainter container justify="space-between" alignItems="center">
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
          <ProjectImage src={imageSrc} alt={title} />
        </Grid>
      </ProjectGridContainter>
    </ProjectBox>
  );
};

Project.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  inProgress: PropTypes.bool,
};

Project.defaultProps = {
  backgroundColor: undefined,
  inProgress: false,
};

export default Project;
