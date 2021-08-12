import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@material-ui/core';
import home from './images/home.png';

import CaseStudy from './CaseStudy';
import { Heading } from '../../common/styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';
import { pairwise } from '../../utils';

const Home = ({ workRef }) => {
  const theme = useTheme();
  const showHamburger = useMediaQuery(theme.breakpoints.down('md'));
  const isVerticallyStacked = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Container className={`d-block ${showHamburger ? 'my-5' : 'my-7'}`}>
      <Row className={`${showHamburger ? 'mb-7' : 'mb-9'}`}>
        <Col md={4} className={`m-auto ${showHamburger ? '' : 'p-0'}`}>
          <img src={home} alt="Saanchla Tripathi" />
        </Col>
        <Col
          md={showHamburger ? 8 : { span: 6, offset: 2 }}
          className={`m-auto ${showHamburger ? 'pt-5' : ''}`}
        >
          <Heading
            size={isVerticallyStacked ? '40px' : '50px'}
            weight="600"
            className={isVerticallyStacked ? 'mb-3' : 'mb-4'}
          >
            Hi, I’m Saanchla
          </Heading>
          <Heading
            size={isVerticallyStacked ? '16px' : '21px'}
            font="rubik"
            color="light"
            weight="300"
            className={isVerticallyStacked ? 'mb-4' : 'mb-5'}
          >
            Product Designer based in Toronto{' '}
          </Heading>
          <Heading
            size={isVerticallyStacked ? '18px' : '24px'}
            className={isVerticallyStacked ? 'mb-5' : 'mb-6'}
          >
            As a recruiter turned designer, I’m passionate about converting ideas to
            human-centered digital experiences.
          </Heading>
          <Button
            type="button"
            href="https://www.linkedin.com/in/sanchala-tripathi"
            className="me-4"
          >
            Let’s Chat
          </Button>
          <Button as={Link} to="/about" variant="outline-primary" type="button">
            About
          </Button>
        </Col>
      </Row>
      <Row ref={workRef} className={isVerticallyStacked ? 'mb-4' : 'mb-5'}>
        <Heading size="40px" weight="600">
          Latest Projects
        </Heading>
      </Row>
      {pairwise(CASE_STUDY_PAGES).map((pair) => (
        <Row
          key={`row-${pair[0].replace(/\s+/g, '')}${pair[1].replace(/\s+/g, '')}`}
          className={isVerticallyStacked ? '' : 'mb-3'}
        >
          {pair.map(
            (caseStudy, idx) =>
              caseStudy && (
                <CaseStudy
                  key={caseStudy.replace(/\s+/g, '')}
                  order={idx}
                  title={caseStudy}
                  type={DETAILS[caseStudy].type}
                  to={DETAILS[caseStudy].pathname}
                  // description={DETAILS[caseStudy].description}
                  imageSrc={DETAILS[caseStudy].imageSrc}
                  backgroundColor={DETAILS[caseStudy].home.backgroundColor}
                  inProgress={DETAILS[caseStudy].inProgress}
                />
              ),
          )}
        </Row>
      ))}
    </Container>
  );
};

Home.propTypes = {
  workRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

Home.defaultProps = {
  workRef: undefined,
};

export default Home;
