import React from 'react';
import { Container } from 'react-bootstrap';
import { Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@material-ui/core';

import { P, Text } from '../../../common/styledComponents';
import { VR_TEAMS } from '../../../common/constants';
import CaseStudy from '..';
import Content from '../Content';
import { CenteredImage, List, ListItem } from '../styledComponents';
import images from './images';

const VRTeams = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <CaseStudy
      name={VR_TEAMS}
      myRole="UX Research, UX Strategy, UI Design"
      timeline="3 days"
      imageSrc={images.topImage}
      tools="Figma, Adobe XD"
      platform="VR"
      result="2nd of 22 Teams"
      misc={{ title: 'Result', detail: '2nd of 22 Teams' }}
    >
      <Container className="d-block">
        <Content heading="Overview">
          I participated in Hackathon hosted by BrainStation x Microsoft along with 5
          other UX designers. The goal was to create a digital prototype to support a
          better Work From Home experience in a span of 3 days.
          <P>
            Our solution was VR Teams, a virtual reality extension for Microsoft Teams
            targeted at young professionals working from home. It brings the office space
            to you so you can still experience an “in person” work environment with your
            colleagues while working remotely.
          </P>
        </Content>
        <Content heading="Researching the Problem Space">
          COVID-19 is reshaping what work looks like and experts are asking whether
          working from home will become the ‘new normal’.
          <P>
            While working from home can be great, it can be a struggle for many as it
            fails to emulate the human connections and collaborative effort that come as a
            result of sharing a physical space.
          </P>
          <P>
            “Statistics Canada found that 4.6 million Canadians who don’t normally work
            from home started to in response to the pandemic, based on a survey conducted
            the week of March 22, 2020”.
          </P>
          <P>
            “According to a survey conducted by Vancouver based polling firm Research Co.,
            73% of Canadians surveyed think the working from home trend will continue
            after the COVID-19 pandemic has ended”.
          </P>
        </Content>
        <Content heading="Empathizing with the Target Users">
          After conducting our initial research, we interviewed 10 young professionals
          working from home today for further insights into the problem space, and
          gathered the following common frustrations of working from home.
          <Box mt={5}>
            <Grid container spacing={4}>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper square elevation={2}>
                  <Box p={4}>
                    <b>Working too much</b>
                    <P>
                      Due to the pressure of having to demonstrate productivity while
                      working from home, many young professionals find themselves
                      overworking.
                    </P>
                    <P>
                      They also expressed anxiety associated with unplugging from work as
                      they fear being out of the loop.
                    </P>
                  </Box>
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper square elevation={2}>
                  <Box p={4}>
                    <b>Communication</b>
                    <P>
                      Young professionals find communication during isolation frustrating
                      as the inability to reach colleagues in real-time cause delays and
                      missed opportunities.
                    </P>
                    <P>
                      Although video calls and messages are useful, many miss the
                      interactive experience of engaging with a colleague face-to-face.
                    </P>
                  </Box>
                </Paper>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Paper square elevation={2}>
                  <Box p={4}>
                    <b>Loneliness</b>
                    <P>
                      When asked about their daily struggles of working from home, many
                      expressed feeling lonely due to the lack of socialization outside of
                      work.
                    </P>
                    <P>
                      People are discovering how much they rely on small-talk and breaks
                      with colleagues throughout the day to recharge.
                    </P>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Content>
        <Content heading="Design Challenge">
          With all this information in mind, the question we asked was,
          <Text>
            How might we mitigate the effects of social isolation and provide better
            collaborative opportunities to support young professionals working from home?
          </Text>
        </Content>
        <Content heading="Understanding the Target Users">
          Based on our findings so far, and in order ro keep all team members aligned, we
          created a persona and experience map to capture our target user’s journey as
          they interact with the product. This allowed us to address the persona’s
          frustrations and identify possible opportunities to intervene.
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box pr={isMobile ? 0 : 3}>
                <CenteredImage src={images.targetUser1} alt="" />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box pl={isMobile ? 0 : 3}>
                <CenteredImage src={images.targetUser2} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Content>
        <Content heading="Our Solution">
          One of the main frustrations of our persona, Chris, was the lack of
          connectedness. So we decided to think outside the box, and explore virtual
          reality (VR) tech space. As the VR tech space grows more and more in popularity,
          VR headsets and controllers are becoming increasingly affordable and portable.
          With this knowledge, our team wanted to leverage this technology and imagined
          how this advancement in technology can change the way people work from home.
          <P>
            Our solution was to create a virtual reality extension of Microsoft Teams
            called VR Teams. The idea was to simulate a face-to-face collaboration with
            your colleagues. This solution can help combat lonelinesss for those missing
            out on that small talk in the office, and also provide virtual spaces to work
            in with colleagues.
          </P>
        </Content>
        <Content heading="Concept Sketching and Ideation">
          Once the team was aligned with this solution, each member sketched out their
          concept. Using dot voting we integrated the best parts of everyone’s sketches to
          achieve our set solution.
          <Grid container>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box pr={isMobile ? 0 : 4}>
                <CenteredImage
                  src={images.concept1}
                  margin={isMobile ? '100px auto 10px' : '50px auto 10px'}
                  alt=""
                />
                <div>
                  VR Teams tab added to navigation menu of Microsoft Teams. Before
                  entering VR Teams, prompt on the screen reminds you to give access to
                  mic and to wear your headset in order to view any VR rooms.
                </div>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box px={isMobile ? 0 : 2}>
                <CenteredImage
                  src={images.concept2}
                  margin={isMobile ? '100px auto 10px' : '50px auto 10px'}
                  alt=""
                />
                <div>
                  On the main landing page, users can see common rooms set by the company.
                  They can click on a room to view more information before entering.
                </div>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box pl={isMobile ? 0 : 4}>
                <CenteredImage
                  src={images.concept3}
                  margin={isMobile ? '100px auto 10px' : '50px auto 10px'}
                  alt=""
                />
                <div>
                  Inside My Room, users can view their schedule dashboard of their daily
                  tasks and productivity. They can also set a clock to remind themselves
                  of when to take breaks or end their work day.
                </div>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={2} md={2} />
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box pr={isMobile ? 0 : 5}>
                <CenteredImage src={images.concept4} margin="100px auto 10px" alt="" />
                <div>
                  We took inspiration from Heads Up Display (HUD) seen in the gaming
                  industry. Each display is a customized dashboard for the user, with
                  things like how long they have been in VR, a widget of their email, and
                  upcoming schedule.
                </div>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box pl={isMobile ? 0 : 5}>
                <CenteredImage
                  src={images.concept5}
                  width="100%"
                  margin="100px auto 10px"
                  alt=""
                />
                <div>
                  Name and status of colleagues can be seen on top of their avatars.
                  Notifications are stopped in entertainment rooms.
                </div>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} />
          </Grid>
        </Content>
        <Content heading="Division of Work">
          With less than 2 days to produce high fidelity mock ups and a slide deck
          presentation to pitch our product, we divided our team into groups to tackle
          these tasks.
          <List>
            <ListItem margin="10px 0 0">
              Presentation write-up and slide deck design
            </ListItem>
            <ListItem margin="0">High fidelity UI design and copy writing</ListItem>
            <ListItem margin="0">Asset collection and image sourcing</ListItem>
            <ListItem margin="0">Video production and prototyping</ListItem>
          </List>
          <P>
            While all the members supported each other in their roles, I was responsible
            for asset collection and image sourcing as well as part of the UI design. An
            important part in this role was to adhere to the Microsoft Teams brand
            guideline.
          </P>
        </Content>
        <Content heading="Final Prototype">
          <Box mb={10}>
            <Grid container>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                VR Teams was designed to create a space for users to feel more engaged
                with their co-workers while improving overall collaboration and
                productivity. This initial prototype was built using Figma / Photoshop for
                design, and DraftXR for prototyping.
                <Box
                  display="flex"
                  justifyContent={isMobile ? 'center' : 'left'}
                  mt={isMobile ? 0 : 3}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://app.draftxr.com/vr/AQVyqg"
                  >
                    View VR Prototype
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <CenteredImage
                  src={images.prototype1}
                  margin={isMobile ? '80px auto 0' : '0 auto'}
                  alt=""
                />
              </Grid>
            </Grid>
          </Box>
          <Box mb={10}>
            <Grid container>
              <Grid item lg={5} md={5} sm={12} xs={12}>
                <Box
                  height="100%"
                  display="flex"
                  alignItems="center"
                  pr={isMobile ? 0 : 4}
                >
                  <div>
                    <b>CUSTOMIZABLE WELCOME HUB</b>
                    <P>
                      This page shows the company’s default common rooms open for anyone
                      to join when it is active.
                    </P>
                    <P>
                      Clicking on any room gives information on meeting details & number
                      of participants before you join.
                    </P>
                    <P>
                      You can also create private rooms that can be locked and saved for
                      future viewing.
                    </P>
                  </div>
                </Box>
              </Grid>
              <Grid item lg={7} md={6} sm={12} xs={12}>
                <CenteredImage src={images.prototype2} alt="" />
              </Grid>
            </Grid>
          </Box>
          <Box mb={10}>
            <Grid container>
              <Grid item lg={5} md={5} sm={12} xs={12} />
              <Grid item lg={7} md={7} sm={12} xs={12}>
                <CenteredImage src={images.prototype3} alt="" />
              </Grid>
            </Grid>
          </Box>
          <Grid container>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box height="100%" display="flex" alignItems="center" pr={isMobile ? 0 : 4}>
                <div>
                  <b>HEADS UP DISPLAY (HUD)</b>
                  <P>
                    Once inside a room, you have your own personalised HUD which displays
                    upcoming schedule, email notifications and health tracker. This can be
                    toggled off when desired. To ensure work-life balance, you can set the
                    lights to dim at a certain time to signify the end of your working
                    day.
                  </P>
                </div>
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <CenteredImage src={images.prototype4} alt="" />
            </Grid>
          </Grid>
        </Content>
        <Content heading="Future Considerations">
          Given the short timeframe of this project, there is still a lot more to explore
          for VR Teams.
          <P>
            <b>Adaptation</b> –– To ensure a seamless experience for users, we will
            consider integrating an auto-sync function of files into Microsoft’s existing
            cloud software and other Microsoft Teams functions. This way users are able to
            access any files whether they are inside or outside of VR Teams.
          </P>
          <P>
            <b>Chat</b> –– To fully realize an ‘in-person’ experience, we can consider
            adding a voice-to-text chat capabilities and the ability to ‘whisper’ to
            individual co-workers as if you are sitting right next to them
          </P>
          <P>
            <b>Accessibility</b> –– In order to ensure this product is usable for all
            users, we need to consider WCAG AAA Compliance, and conduct usability tests to
            ensure complaince with accessibility standards.
          </P>
          <P>
            <b>User testing and Iteration</b> –– Due to the limited time frame of this
            project, usability testing was not conducted. The interface will need to be
            tested with users and iterated to ensure the best experience.
          </P>
        </Content>
      </Container>
    </CaseStudy>
  );
};

export default VRTeams;
