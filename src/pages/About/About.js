import React from 'react';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@material-ui/core';

import about from './images/about.png';
import { AboutContainer } from './styledComponents';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AboutContainer>
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Box display="flex" alignItems="center" height="100%">
            <img src={about} alt="" />
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Box px={isMobile ? 3 : 0} pl={isMobile ? 3 : 7}>
            A little about me
            <p>
              I am a curious, self-driven designer passionate in emerging technologies and
              advocating UX design across all fields of work. Having studied psychology in
              my undergrad, I worked as a recruiter for nearly 2 years. During my tenure,
              I had the opportunity to meet a diverse range of people and developed a keen
              ability to tangibly assess their skill set, and apply that towards my
              clients’ needs. Most importantly, I learned to make the candidate the focus
              of the process. Communication and empathizing is what I’m all about. This is
              what led me to pursue a career in UX design. At BrainStation I learned to
              take skills from my previous role and apply them to creating fulfilling
              experiences for users. I was able to gain a firm grasp on the fundamentals
              of design thinking, as well as the most prominent design tools used in the
              industry. I look forward to continue to apply this knowledge in new and
              challenging ways.
            </p>
            <p>
              I am currently working as a freelance UX/UI Designer where I’m able to own
              the full design process, and collaborate with some truly brilliant people. I
              am also part of the senior testers at usertesting.com, which further
              enhances my insights into creating great user experiences.
            </p>
            <p>
              When I&apos;m not wireframing, I like taking different dance classes, and
              indulging my love for trying new foods.
            </p>
            <p>
              Feel free to connect with me to discuss my work, or just geek out over
              theories of human behavior!
            </p>
          </Box>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About;
