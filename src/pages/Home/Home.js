import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@material-ui/core';
import home from './images/home.png';

import CaseStudy from './CaseStudy';
import { Heading } from '../../common/styledComponents';
import { CASE_STUDY_PAGES, DETAILS } from '../../common/constants';
import { pairwise } from '../../utils';

const Home = () => {
  const theme = useTheme();
  const showHamburger = useMediaQuery(theme.breakpoints.down('md'));
  const isVerticallyStacked = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Container className="d-block mb-7">
      <Row className={`${showHamburger ? 'mt-5 mb-7' : 'mt-7 mb-9'}`}>
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
            href="https://www.linkedin.com/in/sanchala-tripathi"
            variant="primary"
            type="button"
            className="me-4"
          >
            LET’S CHAT
          </Button>
          <Button as={Link} to="/about" variant="outline-primary" type="button">
            ABOUT
          </Button>
        </Col>
      </Row>
      <Row className={isVerticallyStacked ? 'mb-4' : 'mb-5'}>
        <Heading size="40px" weight="600">
          Latest Projects
        </Heading>
      </Row>
      {pairwise(CASE_STUDY_PAGES).map((pair) => (
        <Row className={isVerticallyStacked ? '' : 'mb-3'}>
          {pair.map(
            (caseStudy, idx) =>
              caseStudy && (
                <CaseStudy
                  key={caseStudy.replace(/\s+/g, '')}
                  order={idx}
                  title={caseStudy}
                  type={DETAILS[caseStudy].type}
                  to={DETAILS[caseStudy].pathname}
                  description={DETAILS[caseStudy].description}
                  imageSrc={DETAILS[caseStudy].imageSrc}
                  backgroundColor={DETAILS[caseStudy].backgroundColor}
                  inProgress={DETAILS[caseStudy].inProgress}
                />
              ),
          )}
        </Row>
      ))}
    </Container>
  );
};

export default Home;
