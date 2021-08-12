import React from 'react';
import { Box, useMediaQuery, useTheme } from '@material-ui/core';
import { Button, Col, Container, Row } from 'react-bootstrap';

import images from './images';
import {
  BannerBox,
  CenteredBox,
  CenteredImage,
  Section,
  SubSection,
} from '../styledComponents';
import { P } from '../../../common/styledComponents';
import { CULTURE_FIT, DETAILS } from '../../../common/constants';
import CaseStudy from '..';

const CultureFit = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm')); // upto 576
  const isVerticallyStacked = useMediaQuery(theme.breakpoints.down('lg')); // upto 992

  const prototypeLink = 'https://sanchala646197.invisionapp.com/console/share/RA11MXQI6Y';

  return (
    <CaseStudy
      name={CULTURE_FIT}
      myRole="UX Research, Usability Testing, Design Strategy, UI Design"
      timeline="8 weeks"
      imageSrc={images.topImage}
      tools="Sketch, InVision"
      platform="iOS"
      result=""
      prototypeLink={prototypeLink}
    >
      <Container className="d-block">
        <Section>Initial Research</Section>
        <SubSection>Identifying the problem space</SubSection>
        <Box className="mb-7">
          Drawing from my own experience in recruitment, I decided to think about the
          recurring challenges for recruiters. I noticed that despite having the right
          skills on their resume, some candidates did not last more than 6 months on the
          job. The reason? They did not fit into the workplace culture. To ensure there
          was no bias, I decided to start with research to lead my journey.
          <P>
            The term “culture fit” means the alignment of goals and values between the
            employee and their workplace.
          </P>
          <Row className="mt-5">
            <Col sm={4}>
              <CenteredBox width="10.5rem">
                <div className="font-md">Good workplace culture alignment</div>13.9%
                <div className="fw-mid">turnover</div>
              </CenteredBox>
            </Col>
            <Col sm={4}>
              <CenteredBox width="10.5rem" className={isSmScreen ? 'pt-4' : ''}>
                <div className="font-md">Poor workplace culture alignment</div>48.4%
                <div className="fw-mid">turnover</div>
              </CenteredBox>
            </Col>
            <Col sm={4}>
              <CenteredBox width="10.5rem" className={isSmScreen ? 'pt-4' : ''}>
                <div className="font-md">Average cost of replacing an employee</div>1.5
                <div className="fw-mid">times their salary</div>
              </CenteredBox>
            </Col>
          </Row>
          <P>
            Hiring employees that don’t mesh well with the existing workplace culture
            leads to poor work quality, decreased job satisfaction and a potentially toxic
            environment. This results in turnover which has high costs both in time and
            money.
          </P>
          <P>
            Upon further investigation, I found that workplace culture fit independently
            predicts commitment, job satisfaction and job performance.
          </P>
          <Row className="mt-5">
            <Col>
              <CenteredBox width="11rem" fontSize="40px">
                <div className="font-sm">Strong culture fit</div>12%{' '}
                <span style={{ fontSize: '30px' }}>higher</span>
                <div className="font-sm">job performance</div>
              </CenteredBox>
            </Col>
            <Col>
              <CenteredBox width="11rem" fontSize="40px">
                <div className="font-sm">Weak culture fit</div>10%{' '}
                <span style={{ fontSize: '30px' }}>lower</span>
                <div className="font-sm">job performance</div>
              </CenteredBox>
            </Col>
          </Row>
        </Box>

        <Section>Market Research</Section>
        <SubSection>What is the current landscape?</SubSection>
        <Box className="mb-7">
          I also conducted a competitive analysis of some of the existing recruitment
          apps.
          <Row>
            <Col lg={{ order: 'first', span: 8 }}>
              <P>
                Current practices to ensure culture fit include measures like:
                <ul>
                  <li>preparing behavioural interview questions</li>
                  <li>
                    involving a cross-functional selection committee in the screening
                    process
                  </li>
                  <li>
                    giving the candidate a company tour to understand their workplace
                    culture
                  </li>
                </ul>
                However, all of these measures are <b>time-consuming</b> and{' '}
                <b>not data-driven</b>.
              </P>
            </Col>
            <Col xs={{ order: 'first' }} lg={4}>
              <CenteredImage
                src={
                  isVerticallyStacked
                    ? images.marketResearchMobile
                    : images.marketResearch1
                }
                maxHeight="185px"
                margin={isVerticallyStacked ? '40px auto 20px' : '20px auto'}
              />
            </Col>
          </Row>
        </Box>

        <Section>User Research</Section>
        <SubSection>
          Understanding our target users by asking the right questions
        </SubSection>
        <Box className="mb-4">
          After conducting my initial research, I did some user interviews to further
          validate my hypothesis that creating a platform to assess the alignment of a
          candidate to the workplace culture will help recruiters in the selection
          process, and reduce turnover.
          <P className="mb-6">
            Interview participant criteria
            <ul>
              <li>
                <P>
                  <b>Recruiters with 2-7 years of experience in full-cycle recruitment</b>
                  <br />
                  Newer recruiters with little to moderate experience are more likely to
                  need assistance with the selection process and less likely to rely on
                  “gut feelings”. They are also looking to establish credibility with
                  their boss and trust with their clients
                </P>
              </li>
              <li>
                <P>
                  <b>Working in a high volume work environment</b>
                  <br />
                  They will be more likely to look for solutions to save time
                </P>
              </li>
              <li>
                <P>
                  <b>Tech-savvy</b>
                  <br />
                  They will be able to use new platforms with little coaching
                </P>
              </li>
              <li>
                <P>
                  <b>Travel often or work remotely</b>
                  <br />
                  They will be in need of a solution that helps them work on the go
                </P>
              </li>
            </ul>
            I did a few interrogative phone interviews with 5 recruiters that met the
            participant criteria, to further understand the current user journey.
          </P>
          <Row className="my-4">
            <Col
              sm={12}
              lg={7}
              className="p-3 px-4"
              style={{ backgroundColor: DETAILS[CULTURE_FIT].caseStudy.backgroundColor }}
            >
              “Candidates leaving too quickly damages my reputation as a recruiter”
            </Col>
          </Row>
          <Row className="my-4">
            <Col
              sm={12}
              lg={{ span: 7, offset: 5 }}
              className="p-3 px-4"
              style={{ backgroundColor: DETAILS[CULTURE_FIT].caseStudy.backgroundColor }}
            >
              “I wish there was a checklist of attributes that a company is looking for in
              a new hire”
            </Col>
          </Row>
          <Row className="my-4">
            <Col
              sm={12}
              lg={7}
              className="p-3 px-4"
              style={{ backgroundColor: DETAILS[CULTURE_FIT].caseStudy.backgroundColor }}
            >
              “I do multiple screenings but that’s not 100% reliable”
            </Col>
          </Row>
          <P className="mt-6">
            I noticed some common themes and patterns in the user responses, and I was
            able to extract some insights that would later influence my design decisions.
          </P>
          <P>
            <ul>
              <li>
                Overall, users agreed that workplace culture fit is important and lack of
                it leads to high turnover
              </li>
              <li>Finding replacements takes too much time and resources</li>
              <li>
                Users need a platform to assess a candidate’s alignment with that
                workplace culture to ensure fit
              </li>
              <li>
                Users are looking for a reliable solution to guide their selection process
              </li>
            </ul>
          </P>
          <P>
            To ensure that the user stayed at the forefront through the process and build
            a more meaningful solution, I created a persona (Jennifer James) to look at
            some of their goals, frustrations and motivations.
          </P>
          <CenteredImage src={images.persona1} alt="" maxHeight="500px" />
          I then, created an experience map of what the current recruitment process looks
          like for my persona in order to identify possible opportunities for intervention
          <CenteredImage src={images.persona2} alt="" maxHeight="500px" />
          <P>
            The main opportunity here is to intervene early and provide a platform for
            recruiters to assess a candidate’s culture fit even before getting to
            interviews.
          </P>
          Keeping this information and my persona in mind, my question was
        </Box>
      </Container>

      <BannerBox
        className="mb-7"
        backgroundColor={DETAILS[CULTURE_FIT].caseStudy.backgroundColor}
      >
        <Container>
          How might we help recruiters evaluate a candidate’s workplace culture fit to
          reduce turnover?
        </Container>
      </BannerBox>

      <Container className="d-block">
        <Section>Task Selection Process</Section>
        <SubSection>Creating customized assessments to evaluate candidates</SubSection>
        <Box className="mb-4">
          Once I found the opportunity for my persona, it was time to create user stories.
          By doing this, I aimed to define the minimum set of product features which would
          help users achieve their goals.
          <P>
            <b>Core Value Proposition</b>
            <br />
            To evaluate a candidate’s workplace culture fit through customized assessments
          </P>
          <P>
            <b>Core Epic</b>
            <br />
            To create a customized assessment for a specific position and company
          </P>
          <CenteredImage src={images.taskSelection1} width="900px" />
        </Box>
        <SubSection>Determining the user flow</SubSection>
        <Box className="mb-4">
          Once the main task was established, I developed a task flow to determine how
          Jennifer would navigate through the app to create a custimzed candidate
          assessment.
          <CenteredImage src={images.taskSelection2} width="700px" />
        </Box>

        <Section>Sketches & Wireframes</Section>
        <SubSection>Starting with pen and paper</SubSection>
        <Box className="mb-4">
          Once I was clear on the task flow, I started to sketching a possible solution to
          better understand how users would navigate through the features in the app. I
          used inspirations from other existing UI components and looked at
          functionalities from apps LinkedIn, Monster and Indeed for ideas.
          <Row>
            <Col>
              <CenteredImage
                src={images.sketch1}
                width="350px"
                style={{ marginRight: 0 }}
              />
            </Col>
            <Col>
              <CenteredImage
                src={images.sketch2}
                width="350px"
                style={{ marginLeft: 0 }}
              />
            </Col>
          </Row>
          From sketching on paper, I moved onto digital wireframes to create my first
          prototype so that I could begin testing my designs early in the process.
          <CenteredImage src={images.wireFrame1} />
        </Box>

        <Section>Usability Testing: 2 Rounds</Section>
        <SubSection>Understanding how users interact with the app</SubSection>
        <Box className="mb-4">
          The prototype underwent two rounds of usability testing with 5 participants in
          each round. Testers were given a series of simple tasks to complete. The results
          from the first round were used to inform my design changes for the next
          iteration.
          <P>
            <ol>
              <li className="mb-7">
                The Dashboard needed a redesign to present an overview of relevant
                information
                <CenteredImage width="800px" src={images.testing1} />
              </li>
              <li className="mb-7">
                Some screens were were too information dense and needed to be broken up
                <CenteredImage width="800px" src={images.testing2} />
              </li>
              <li className="mb-7">
                Some terminology and icons were not intuitive for users
                <CenteredImage width="800px" src={images.testing3} />
              </li>
              <li className="mb-7">
                The assessment results graphic needed to be simplified
                <CenteredImage width="800px" src={images.testing4} />
              </li>
            </ol>
          </P>
        </Box>
        {/* ////////////////////////////// */}
        <Section>Design Library</Section>
        <SubSection>Developing a brand identity to enhance the experience</SubSection>
        <Box className="mb-7">
          With the final flow of screens established, it was time to develop the visual
          identity of the brand. I curated images from words that were associated with the
          brand values like:
          <Row>
            <Col xs={6} md={3} lg={2}>
              <ul>
                <li>trustworthy</li>
                <li>reliable</li>
                <li>professional</li>
                <li>informative</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>minimalistic</li>
                <li>clean</li>
                <li>approachable</li>
                <li>modern</li>
              </ul>
            </Col>
          </Row>
          <P>
            Using these adjectives, I searched for inspiration and created a{' '}
            <b>monochromatic colour palette</b> as it is easy on the eyes and portrays a{' '}
            <b>clean</b> and <b>elegant</b> scheme. For typography, I used a font that
            evoked the same feeling, without seeming text-heavy on small screens.
          </P>
          <CenteredImage src={images.designLib1} />
        </Box>

        <Section>App Logo Development</Section>
        <SubSection>Representing the product in the logo</SubSection>
        <Box className="mb-7">
          I wanted the logo to symbolize the importance of finding the right fit, like
          pieces of a puzzle that fit together perfectly.
          <P>
            I played around with a few different app names but decided to keep it simple
            and self-explanatory with “Culture Fit”.
          </P>
          <P>
            To keep the feeling of a corporate app, the minimalistic word mark was
            inspired by LinkedIn.
          </P>
          <CenteredImage width="800px" src={images.logoDev1} />
        </Box>

        <Section>High Fidelity Prototype</Section>
        <SubSection>Bringing it all together</SubSection>
        <Box className="mb-7">
          The goal here was to create a reliable, corporate experience for recruiters to
          make data-driven decisions about hiring candidates.
        </Box>

        <Section as="div" className="text-center">
          Creating a Customized Assessment to Evaluate Culture Fit
        </Section>
        <Box className="mb-4">
          <CenteredImage width="900px" src={images.hifi1} margin="0 auto" />
        </Box>

        <Section as="div" className="text-center">
          Viewing Assessment Results to Guide Candidate Selection Process
        </Section>
        <Box>
          <CenteredImage src={images.hifi2} margin="0 auto" />
        </Box>
      </Container>

      {prototypeLink && (
        <Box className="mb-6 text-center">
          <Button type="button" variant="secondary" href={prototypeLink}>
            View Prototype
          </Button>
        </Box>
      )}

      <BannerBox
        className="mb-7"
        padding="0"
        backgroundColor={DETAILS[CULTURE_FIT].caseStudy.backgroundColor}
      >
        <CenteredImage margin="auto" maxHeight="550px" src={images.mid} alt="" />
      </BannerBox>

      <Container className="d-block">
        <Section>Next Steps</Section>
        <SubSection>What to do for future improvements</SubSection>
        <Box className="mb-7">
          Some features that can still be added to future iterations of this product to
          enhance the user experience and brand value:
          <ul>
            <li>
              <b>ATS integration:</b> A way to integrate the app with existing Applicant
              Tracking Systems to export applicant data into the app. This would also help
              to email selected candidates from the app
            </li>
            <li>
              <b>Progress reports:</b> A statistics page to view employee retention and
              turnover rates to see if the app has helped combat the problem of high
              turnover
            </li>
            <li>
              <b>Extension to team alignment:</b> A way to gauge candidate’s alignment
              with the team
            </li>
          </ul>
        </Box>

        <Section>Key Project Learnings</Section>
        <SubSection>Learning the importance of testing and communication</SubSection>
        <Box className="mb-7">
          I really enjoyed learning about and putting into practice each different stage
          of the UX process, end-to-end. Here are some of the key learnings I will take on
          to my next project: Once I found the opportunity for my persona, it was time to
          create user stories. By doing this, I aimed to define the minimum set of product
          features which would help users achieve their goals.
          <P>
            <b>Validate Ideas Early and Often</b>
            <br />
            Getting feedback early on, no matter how rough the ideas are, is invaluable.
            What might be obvious to you might not be to the user. The smallest changes
            can have the biggest impact.
          </P>
          <P>
            <b>Paper and pen are your best friends</b>
            <br />
            Quick and rough iterations before moving to a digital medium can help to speed
            up the process and prevent wasted time.
          </P>
          <P>
            <b>Only build what you need to test</b>
            <br />
            Prototyping is fun. However if a prototyped feature isn’t used in a test, did
            it ever truly exist?
          </P>
        </Box>
      </Container>
    </CaseStudy>
  );
};

export default CultureFit;
