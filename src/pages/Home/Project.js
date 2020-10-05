import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@material-ui/core';

import {
  Overlay,
  ProjectGridContainter,
  ProjectLink,
  ProjectBox,
  ProjectImage,
} from './styledComponents';

const Project = ({ to, title, description, imageSrc, backgroundColor }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ProjectLink to={to}>
        <ProjectBox mb={7} backgroundColor={backgroundColor}>
          <ProjectGridContainter
            container
            justify="space-between"
            alignItems="center"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Overlay open={open} />
            <Grid item lg={6} sm={12}>
              <Box p={7}>
                <Typography variant="h4" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {description}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} sm={12} p={3}>
              <ProjectImage src={imageSrc} alt={title} />
            </Grid>
          </ProjectGridContainter>
        </ProjectBox>
      </ProjectLink>
    </>
  );
};

Project.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Project.defaultProps = {
  backgroundColor: undefined,
};
export default Project;
