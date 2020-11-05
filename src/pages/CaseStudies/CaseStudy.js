import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CaseStudyImage, Heading } from './styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';

const CaseStudy = ({ myRole, tools, timeline, platform, imageSrc, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Grid container>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <CaseStudyImage src={imageSrc} alt="" />
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Box
            ml={isMobile ? 0 : 10}
            mt={isMobile ? 5 : 3}
            display={isMobile ? 'flex' : 'block'}
            justifyContent={isMobile ? 'space-between' : 'normal'}
          >
            <Box maxWidth={isMobile ? '50%' : '100%'}>
              <Heading variant="sm">My role</Heading>
              <Typography variant="body1" gutterBottom>
                {myRole}
              </Typography>
              <Heading variant="sm">Tools</Heading>
              <Typography variant="body1" gutterBottom>
                {tools}
              </Typography>
            </Box>
            <Box>
              <Heading variant="sm">Timeline</Heading>
              <Typography variant="body1" gutterBottom>
                {timeline}
              </Typography>
              <Heading variant="sm">Platform</Heading>
              <Typography variant="body1" gutterBottom>
                {platform}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {children}
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
