import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Box, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CaseStudyImage, CenteredImage, Heading, Section } from './styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';
import { P } from '../../common/styledComponents';

const CaseStudy = ({
  name,
  myRole,
  tools,
  timeline,
  result,
  platform,
  prototypeLink,
  imageSrc,
  misc,
  children,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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

  const detailMargin = misc.title ? 0 : 3;

  return (
    <>
      <Container
        fluid
        className="mb-5 p-0"
        style={{
          backgroundColor: DETAILS[name].caseStudy.backgroundColor,
        }}
      >
        <CenteredImage margin="0 auto" maxHeight="550px" src={imageSrc} alt="" />
      </Container>
      <Container className="d-block">
        <h1>{name}</h1>
        <P>{DETAILS[name].description}</P>
        <Row className="my-5">
          <Col>
            <Section as="div">My Role</Section>
            <span className="font-sm">{myRole}</span>
          </Col>
          <Col>
            <Section as="div">Timeline</Section>
            <span className="font-sm">{timeline}</span>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <Section as="div">Tools</Section>
            <span className="font-sm">{tools}</span>
          </Col>
          <Col>
            {result && (
              <>
                <Section as="div">Result</Section>
                <span className="font-sm">{result}</span>
              </>
            )}
          </Col>
        </Row>
        {prototypeLink && (
          <Box className="mb-6 text-center">
            <Button type="button" variant="secondary" href={prototypeLink}>
              View Prototype
            </Button>
          </Box>
        )}
        {/* <Grid container>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box height="100%" display="flex" alignItems="center">
            <CaseStudyImage src={imageSrc} alt="" />
          </Box>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Box
            ml={isMobile ? 0 : 10}
            mt={isMobile ? 5 : detailMargin}
            height="100%"
            display={isMobile ? 'flex' : 'block'}
            justifyContent={isMobile ? 'space-between' : 'normal'}
          >
            <Box maxWidth={isMobile ? '50%' : '100%'}>
              <Heading isMobile={isMobile} variant={isMobile ? 'md' : 'sm'}>
                My role
              </Heading>
              <Typography variant="body1" gutterBottom>
                {myRole}
              </Typography>
              <Heading isMobile={isMobile} variant={isMobile ? 'md' : 'sm'}>
                Tools
              </Heading>
              <Typography variant="body1" gutterBottom>
                {tools}
              </Typography>
            </Box>
            <Box>
              <Heading isMobile={isMobile} variant={isMobile ? 'md' : 'sm'}>
                Timeline
              </Heading>
              <Typography variant="body1" gutterBottom>
                {timeline}
              </Typography>
              <Heading isMobile={isMobile} variant={isMobile ? 'md' : 'sm'}>
                Platform
              </Heading>
              <Typography variant="body1" gutterBottom>
                {platform}
              </Typography>
            </Box>
            {!isMobile && misc.title && (
              <Box>
                <Heading isMobile={isMobile} variant={isMobile ? 'md' : 'sm'}>
                  {misc.title}
                </Heading>
                <Typography variant="body1" gutterBottom>
                  {misc.detail}
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
        {isMobile && misc.title && (
          <Box>
            <Heading isMobile={isMobile} variant={isMobile ? 'md' : 'sm'}>
              {misc.title}
            </Heading>
            <Typography variant="body1" gutterBottom>
              {misc.detail}
            </Typography>
          </Box>
        )}
      </Grid> */}
        {children}
        <Box display="flex" justifyContent="space-between" my={5}>
          {showNextAndPrev()}
        </Box>
      </Container>
    </>
  );
};

CaseStudy.propTypes = {
  myRole: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  tools: PropTypes.string,
  timeline: PropTypes.string,
  platform: PropTypes.string,
  misc: PropTypes.object,
  prototypeLink: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CaseStudy.defaultProps = {
  tools: undefined,
  timeline: undefined,
  platform: undefined,
  prototypeLink: undefined,
  misc: {},
};

export default CaseStudy;
