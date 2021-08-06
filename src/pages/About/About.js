import React from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';

import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
// import about1 from './images/about1.jpeg';
// import about2 from './images/about2.jpeg';
// import about3 from './images/about3.jpeg';
// import about4 from './images/about4.jpeg';
import group from './images/group.png';
import about1crop from './images/about1crop.jpeg';
import about2crop from './images/about2crop.jpeg';
import about3crop from './images/about3crop.jpeg';
import about4crop from './images/about4crop.jpeg';
import { AboutContent } from './styledComponents';
import { Heading, P } from '../../common/styledComponents';

const About = () => {
  const theme = useTheme();
  const isVerticallyStacked = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Container className="d-block my-7">
      <Row>
        <Col lg={6} className="d-flex justify-content-center">
          {isVerticallyStacked ? (
            <Box>
              <Carousel>
                <Carousel.Item>
                  <img
                    isVerticallyStacked={isVerticallyStacked}
                    src={about1crop}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    isVerticallyStacked={isVerticallyStacked}
                    src={about2crop}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    isVerticallyStacked={isVerticallyStacked}
                    src={about3crop}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    isVerticallyStacked={isVerticallyStacked}
                    src={about4crop}
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </Box>
          ) : (
            <Box className="position-relative" maxWidth="550px">
              <img isVerticallyStacked={isVerticallyStacked} src={group} alt="" />
            </Box>
          )}
        </Col>
        <Col lg={6}>
          <Box className="px-4">
            <Heading size="40px" weight="600" className="mb-5">
              What’s my story?
            </Heading>
            <AboutContent>
              <P>
                I am a curious, self-driven designer passionate in emerging technologies.
                Having studied psychology in my undergrad, I worked as a recruiter for
                nearly 2 years. During my tenure, I had the opportunity to meet a diverse
                range of people and developed a keen ability to tangibly assess their
                skill set, and apply that towards my clients’ needs. Most importantly, I
                learned to make the candidate the focus of the process. Communication and
                empathy is what I’m all about. This is what led me to pursue a career in
                UX design.{' '}
                <b>
                  I discovered that my background in psychology, experience in HR and
                  knowledge of user-centred design gives me a holistic understanding of
                  user behaviours, allowing me to always put the user first.
                </b>
              </P>
              <P>
                I believe design is not just making products - it’s strategy, it’s an
                experience, it’s a feeling. <b>Simply put, design is intent.</b>
              </P>
              <P size="28px" className="my-5">
                “I know I have done my job well when the user says ‘this product gets me!’
                ”
              </P>
              <P>
                I am currently working as a freelance Product Designer where I’m able to
                own the full design process, and collaborate with some truly brilliant
                people. I am also a seasoned participant of usertesting.com, which further
                enhances my insights into creating fulfilling user experiences. I am
                constantly looking to improve my skills and welcome feedback.
              </P>
              <P>
                When I’m not wireframing, you’ll find me taking different dance classes,
                exploring hiking trails, or biking around the city.
              </P>
              <P className="mb-5">
                Feel free to connect with me to discuss my work, or just geek out over
                theories of human behavior!
              </P>
              <Button type="button" href="https://www.linkedin.com/in/sanchala-tripathi">
                LET’S CHAT
              </Button>
            </AboutContent>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
