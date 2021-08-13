import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Box, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { CenteredImage, Section } from './styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';
import { P } from '../../common/styledComponents';

const CaseStudy = ({
  name,
  myRole,
  tools,
  timeline,
  result,
  prototypeLink,
  imageSrc,
  children,
}) => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm')); // upto 576
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
        <IconButton
          size="small"
          style={isSmScreen ? { fontSize: '16px' } : {}}
          component={Link}
          to={DETAILS[prevPage].pathname}
        >
          <ChevronLeftIcon />
          Prev: {prevPage}
        </IconButton>
      ) : (
        <IconButton size="small" disabled />
      )}
      {nextPage ? (
        <IconButton
          size="small"
          style={isSmScreen ? { fontSize: '16px' } : {}}
          component={Link}
          to={DETAILS[nextPage].pathname}
        >
          Next: {nextPage}
          <ChevronRightIcon />
        </IconButton>
      ) : (
        <IconButton size="small" disabled />
      )}
    </>
  );

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
      </Container>
      {children}
      <Container className="d-block">
        <Box display="flex" justifyContent="space-between" my={5}>
          {showNextAndPrev()}
        </Box>
      </Container>
    </>
  );
};

CaseStudy.propTypes = {
  name: PropTypes.string.isRequired,
  myRole: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  tools: PropTypes.string,
  result: PropTypes.string,
  timeline: PropTypes.string,
  prototypeLink: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CaseStudy.defaultProps = {
  tools: undefined,
  timeline: undefined,
  result: undefined,
  prototypeLink: undefined,
};

export default CaseStudy;
