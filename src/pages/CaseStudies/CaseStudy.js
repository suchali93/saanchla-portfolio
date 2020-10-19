import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid } from '@material-ui/core';
import { ProjectImage, ProjectInfo } from './styledComponents';

const CaseStudy = ({ myRole, tools, timeline, platform, imageSrc, children }) => {
  return (
    <Container>
      <Box pt={5}>
        <Grid container alignItems="center" spacing={10}>
          <Grid item lg={6}>
            <ProjectImage src={imageSrc} alt="" />
          </Grid>
          <Grid item lg={6}>
            <Box mb={5}>
              <ProjectInfo>My role</ProjectInfo>
              {myRole}
            </Box>
            <Box mb={5}>
              <ProjectInfo>Tools</ProjectInfo>
              {tools}
            </Box>
            <Box mb={5}>
              <ProjectInfo>Timeline</ProjectInfo>
              {timeline}
            </Box>
            <Box>
              <ProjectInfo>Platform</ProjectInfo>
              {platform}
            </Box>
          </Grid>
        </Grid>
        {children}
      </Box>
    </Container>
  );
};

CaseStudy.propTypes = {
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  tools: PropTypes.string,
  timeline: PropTypes.string,
  platform: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CaseStudy.defaultProps = {
  tools: '',
  timeline: '',
  platform: '',
};

export default CaseStudy;
