import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Box, Container, Grid } from '@material-ui/core';
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
  return (
    <Container>
      {prevPage && <Link to={DETAILS[prevPage].pathname}>{prevPage}</Link>}
      {nextPage && <Link to={DETAILS[nextPage].pathname}>{nextPage}</Link>}
      <Box pt={5}>
        <Grid container alignItems="center" spacing={10}>
          <Grid item lg={6}>
            <CaseStudyImage src={imageSrc} alt="" />
          </Grid>
          <Grid item lg={6}>
            <Box mb={5}>
              <CaseStudyInfo>My role</CaseStudyInfo>
              {myRole}
            </Box>
            <Box mb={5}>
              <CaseStudyInfo>Tools</CaseStudyInfo>
              {tools}
            </Box>
            <Box mb={5}>
              <CaseStudyInfo>Timeline</CaseStudyInfo>
              {timeline}
            </Box>
            <Box>
              <CaseStudyInfo>Platform</CaseStudyInfo>
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
