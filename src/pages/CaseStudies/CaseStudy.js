import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Box, Container, Grid, IconButton, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CaseStudyImage, CaseStudyInfo } from './styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';

const CaseStudy = ({ myRole, tools, timeline, platform, imageSrc, children }) => {
  const activePath = useLocation().pathname;
  const currentPageIdx = CASE_STUDY_PAGES.findIndex(
    (caseStudy) => DETAILS[caseStudy].pathname === activePath,
  );
  const prevPageIdx = currentPageIdx !== 0 ? currentPageIdx - 1 : -1;
  const prevPage = CASE_STUDY_PAGES[prevPageIdx];
  const nextPageIdx =
    currentPageIdx !== CASE_STUDY_PAGES.length - 1 ? currentPageIdx + 1 : -1;
  const nextPage = CASE_STUDY_PAGES[nextPageIdx];

  const showNextAndPrev = () => (
    <>
      {prevPage ? (
        <IconButton size="small" component={Link} to={DETAILS[prevPage].pathname}>
          <ChevronLeftIcon />
          Prev: {prevPage}
        </IconButton>
      ) : (
        <IconButton size="small" disabled />
      )}
      {nextPage ? (
        <IconButton size="small" component={Link} to={DETAILS[nextPage].pathname}>
          Next: {nextPage}
          <ChevronRightIcon />
        </IconButton>
      ) : (
        <IconButton size="small" disabled />
      )}
    </>
  );
  return (
    <Container>
      <Box pt={5}>
        <Grid container>
          <Grid item lg={7}>
            <CaseStudyImage src={imageSrc} alt="" />
          </Grid>
          <Grid item lg={5}>
            <Box mb={5}>
              <Typography variant="h3">My role</Typography>
              {myRole}
            </Box>
            <Box mb={5}>
              <Typography variant="h3">Tools</Typography>
              {tools}
            </Box>
            <Box mb={5}>
              <Typography variant="h3">Timeline</Typography>
              {timeline}
            </Box>
            <Box>
              <Typography variant="h3">Platform</Typography>
              {platform}
            </Box>
          </Grid>
        </Grid>
        {children}
      </Box>
      <Box display="flex" justifyContent="space-between" my={5}>
        {showNextAndPrev()}
      </Box>
    </Container>
  );
};

CaseStudy.propTypes = {
  myRole: PropTypes.string.isRequired,
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
