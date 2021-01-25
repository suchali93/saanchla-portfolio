import React from 'react';
import { Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';

import CaseStudy from '..';
import Content from '../Content';
import images from './images';
import { CenteredImage, List, ListItem } from '../styledComponents';

const CultureFit = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <CaseStudy
      myRole="Lead UX/UI Designer"
      timeline="10 weeks"
      imageSrc={images.banner}
      tools="Sketch, InVision"
      platform="iOS"
    >
      <Content heading="Overview">
        CultureFit is a platform for recruiters to evaluate candidates beyond the resume,
        by focussing on workplace culture fit. This was completed as an individual project
        during the full-time UX Program at Brainstation.
      </Content>
      <Content heading="Identifying the Problem Space">
        Drawing from my own experience in recruitment, I decided to think about the
        recurring challenges for recruiters. I noticed that despite having the right
        skills on their resume, some candidates did not last more than 6 months on the
        job. The reason? They did not fit into the workplace culture. To ensure there was
        no bias, I decided to start with research to lead my journey.
        <Content heading="PRELIMINARY RESEARCH FINDINGS" level={2}>
          The term “culture fit” means the alignment of goals and values between the
          employee and their workplace.
          <CenteredImage src={images.research1} margin="40px auto" alt="" />
          Hiring employees that don’t mesh well with the existing workplace culture leads
          to poor work quality, decreased job satisfaction and a potentially toxic
          environment. This results in turnover which has high costs both in time and
          money.
          <p>
            Upon further investigation, I found that workplace culture fit independently
            predicts commitment, job satisfaction and job performance.
          </p>
          <CenteredImage src={images.research2} margin="50px auto" alt="" />
        </Content>
        <Content heading="MARKET RESEARCH ON CURRENT INITIATIVES" level={2}>
          Current practices to ensure culture fit include measures like preparing{' '}
          <b>behavioural interview questions</b>, involving a{' '}
          <b>cross-functional selection committee</b> in the screening process, or giving
          the candidate a <b>company tour</b> to understand their workplace culture.
          However, all of these measures are <b>time-consuming</b> and{' '}
          <b>not data-driven</b>.
        </Content>
      </Content>
      <Content heading="Design Challenge">
        My project goal was to help recruiters make data-driven candidate selections to
        ensure workplace culture fit, and ultimately lower turnover. In other words,
        <CenteredImage src={images.designChallenge} alt="" />
      </Content>
      <Content heading="Empathizing with the Target Users">
        After conducting research, I did some user interviews to further validate my
        hypothesis that creating a platform to assess the alignment of a candidate to the
        workplace culture will help recruiters in the selection process, and reduce
        turnover.
        <Content heading="INTERVIEW PARTICIPANT CRITERIA" level={2}>
          <List listStyle="none">
            <ListItem>
              <b>Recruiters with 2-7 years of experience in full-cycle recruitment</b>
              <br />
              Newer recruiters with little to moderate experience are more likely to need
              assistance with the selection process and less likely to rely on “gut
              feelings”. They are also looking to establish credibility with their boss
              and trust with their clients
            </ListItem>
            <ListItem>
              <b>Working in a high volume work environment</b>
              <br />
              They will be more likely to look for solutions to save time
            </ListItem>
            <ListItem>
              <b>Tech-savvy</b>
              <br />
              They will be able to use new platforms with little coaching
            </ListItem>
            <ListItem>
              <b>Travel often or work remotely</b>
              <br />
              They will be in need of a solution that helps them work on the go
            </ListItem>
          </List>
        </Content>
        <Content heading="KEY INSIGHTS" level={2}>
          <Grid container>
            <Grid item lg={7} md={6} sm={12} xs={12}>
              <Box height="100%" display="flex" alignItems="center" pr={isMobile ? 0 : 4}>
                Overall, recruiters were aware that workplace culture fit is important and
                lack of it leads to high turnover.
                <br />
                <br />
                <br />
                Recruiters need a platform to assess a candidate’s alignment with that
                workplace culture to ensure fit.
              </Box>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <CenteredImage src={images.insights} alt="" />
            </Grid>
          </Grid>
        </Content>
      </Content>
      <Content heading="Understanding the Target Users">
        To ensure that the user stayed at the forefront through the process and to build
        empathy for a more meaningful solution, I created a primary persona (Jennifer
        James) to look at some of their <b>goals, frustrations and motivations</b>.
        <CenteredImage src={images.targetUser1} alt="" />I then, created an{' '}
        <b>experience map</b> of what the <b>current recruitment process</b> looks like
        for my persona in order <b>to identify possible opportunities for intervention</b>
        .
        <CenteredImage src={images.targetUser2} margin="50px auto" alt="" />
        The main opportunity here is to intervene early and provide a platform for
        recruiters to assess a candidate’s culture fit even before getting to interviews.
      </Content>
      <Content heading="User Stories and Task Flow">
        Once I found the opportunity for my persona, it was time to create user stories.
        By doing this, I aimed to define the minimum set of product features which would
        help users achieve their goals, whilst also providing valuable learnings and
        insights into how the product is used and what other needs users may have that
        could be solved in future iterations.
        <CenteredImage src={images.userStory1} alt="" />
        Based on the user stories I created a task flow diagram. This task flow shows the
        series of steps to <b>create a customized candidate assessment</b>.
        <CenteredImage src={images.userStory2} alt="" />
      </Content>
      <Content heading="Concept Sketching and Ideation">
        To better understand how users would expect to interact and navigate through the
        features and content available in the app, a reasonable next step was to start
        sketching. I used inspirations from other existing UI components and looked at
        functionalities from apps LinkedIn, Monster and Indeed for ideas.
        <Grid container>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <CenteredImage src={images.concept1} alt="" />
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <CenteredImage src={images.concept2} alt="" />
          </Grid>
        </Grid>
        <Content heading="LOW-FIDELITY WIREFRAMES" level={2}>
          The first set of wireframes were done in low fidelity in order to focus on the
          overall structure and layout of the design.
          <CenteredImage src={images.wireframe} alt="" />
        </Content>
      </Content>
      <Content heading="Usability Testing">
        Two rounds of user testing were conducted with 10 participants, with the second
        round being a revised iteration based on feedback gathered from the first round.
        <p>
          The user was told to use the app to <b>create an assessment</b> to measure
          candidates’ alignment with Amazon’s workplace culture, specifically in the role
          of a UX Designer. They will then <b>look up the results of assessment</b> to
          decide who to interview.
        </p>
        <Content heading="KEY CHANGES" level={2}>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box pr={isMobile ? 0 : 3}>
                <div>
                  The Dashboard needed a redesign to present an overview of relevant
                  information
                </div>
                <CenteredImage
                  src={images.keyChange1}
                  margin="20px auto 80px auto"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box pl={isMobile ? 0 : 3}>
                <div>
                  Some screens were were too information dense and needed to be broken up
                </div>
                <CenteredImage
                  src={images.keyChange2}
                  margin="20px auto 80px auto"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box pr={isMobile ? 0 : 3}>
                <div>Some terminology and icons weren’t intuitive</div>
                <CenteredImage
                  src={images.keyChange3}
                  margin={isMobile ? '20px auto 80px auto' : '20px auto'}
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box pl={isMobile ? 0 : 3}>
                <div>The graphic needed to be simplified</div>
                <CenteredImage src={images.keyChange4} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Content>
      </Content>
      <Content heading="Creating a Visual Identity">
        In preparation for taking the wireframes to high fidelity screens, I produced a
        Visual Style Guide that includes moodboards, typography and colour palette that
        would appropriately fit with the purpose and intended feel of the product. I
        curated images from words that were associated with the brand values like
        <List>
          <ListItem margin="10px 0 0">trustworthy</ListItem>
          <ListItem margin="0">reliable</ListItem>
          <ListItem margin="0">professional</ListItem>
          <ListItem margin="0">informative</ListItem>
          <ListItem margin="0">minimalistic</ListItem>
          <ListItem margin="0">clean</ListItem>
          <ListItem margin="0">approachable</ListItem>
          <ListItem margin="0">modern</ListItem>
        </List>
        <Content heading="BRAND COLOUR AND TYPOGRAPHY" level={2}>
          I decided to use shades of <b>blue</b> for my brand because it is associated
          with <b>trust</b> and <b>confidence</b>. I wanted to stick to a{' '}
          <b>monochromatic palette</b> as it is easy on the eyes and portrays a{' '}
          <b>clean</b> and <b>elegant</b> scheme.
          <p>
            For typography, I used a font that conveyed the same feeling without seeming
            text heavy on small screens.
          </p>
          <Grid container>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <CenteredImage src={images.branding1} margin="40px auto 20px" alt="" />
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <CenteredImage src={images.branding2} margin="40px auto 0" alt="" />
            </Grid>
          </Grid>
        </Content>
        <Content heading="APP NAME AND LOGO" level={2}>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box height="100%" display="flex" alignItems="center" pr={isMobile ? 0 : 4}>
                I wanted the logo to symbolize the importance of finding the right fit,
                like pieces of a puzzle that fit together perfectly.
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <CenteredImage src={images.logo1} alt="" />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <CenteredImage src={images.logo2} alt="" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box height="100%" display="flex" alignItems="center" pr={isMobile ? 0 : 4}>
                To keep the feeling of a corporate app, the minimalistic word mark was
                inspired by LinkedIn.
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <CenteredImage src={images.name1} margin="20px auto 0" alt="" />
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={6}>
              <CenteredImage src={images.name2} margin="54px auto 20px" alt="" />
            </Grid>
          </Grid>
        </Content>
      </Content>
      <Content heading="Final Prototype">
        With all this as my inspiration, I created my final UI design. Below are some of
        the high-fidelity screens from my app.
        <Button variant="outlined" color="primary">
          View Prototype
        </Button>
      </Content>
      <Content heading="Marketing Website for CultureFit">
        <Grid container>
          <Grid item lg={7} md={6} sm={12} xs={12}>
            As an additional challenge, I created a landing page for a responsive website
            to market CultureFit. The main goal of this website was to advertise my app’s
            value proposition in order for my target users to want to download the app.
            <p>You can view the prototypes here : Desktop | Mobile</p>
          </Grid>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <CenteredImage src={images.marketing} margin="0 auto" alt="" />
          </Grid>
        </Grid>
      </Content>
      <Content heading="Future Considerations">
        Due to a time constraint, certain features of the app that were not explored but
        can be in future iterations would be:
        <List>
          <ListItem margin="10px 0 0">
            A way to integrate the app with existing Applicant Tracking Systems to export
            applicant data into the app. This would also help to email selected candidates
            from the app
          </ListItem>
          <ListItem margin="0">
            A statistics page to view employee retention and turnover rates to see if the
            app has helped combat the problem of high turnover
          </ListItem>
          <ListItem margin="0">
            A way to gauge candidate’s alignment with the team
          </ListItem>
        </List>
      </Content>
      <Content heading="Key Takeaways">
        I really enjoyed learning about and putting into practice each different stage of
        the UX process, end-to-end. Here are some of the key learnings I will take on to
        my next project:
        <Box mt={5}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper square elevation={2}>
                <Box p={4}>
                  <b>Validate Ideas Early and Often</b>
                  <p>
                    Getting feedback early on, no matter how rough the ideas are, is
                    invaluable. What might be obvious to you might not be to the user. The
                    smallest changes can have the biggest impact.
                  </p>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper square elevation={2}>
                <Box p={4}>
                  <b>Paper and pen are your best friends</b>
                  <p>
                    Quick and rough iterations before moving to a digital medium can help
                    to speed up the process and prevent wasted time.
                  </p>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Paper square elevation={2}>
                <Box p={4}>
                  <b>Only build what you need to test</b>
                  <p>
                    Prototyping is fun. However if a prototyped feature isn't used in a
                    test, did it ever truly exist?
                  </p>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Content>
    </CaseStudy>
  );
};

export default CultureFit;
