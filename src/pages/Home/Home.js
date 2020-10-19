import React from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';

import CultureFitImage from '../CaseStudies/CultureFit/images/Banner.png';
import BOSImage from '../CaseStudies/BOS/images/Banner.png';
import TeamsVRImage from '../CaseStudies/TeamsVR/images/Banner.png';
import OrigynsImage from '../CaseStudies/Origyns/images/Banner.png';
import background from './images/background.png';
import Project from './Project';
import { Header } from './styledComponents';

const Home = () => {
  return (
    <>
      <Header
        background={background}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        mb={10}
      >
        <Box m={7}>
          <Typography variant="h2" gutterBottom>
            Hi! I&apos;m Saanchla
          </Typography>
          <Typography variant="h4" gutterBottom>
            I’m a UX/UI designer.
          </Typography>
          <Button mt={10}>Let's connect!</Button>
        </Box>
      </Header>
      <Container>
        <Project
          to="/case/culture-fit"
          title="CultureFit"
          description="A platform for recruiters to evaluate candidates beyond the resume, by focussing on workplace culture fit."
          imageSrc={CultureFitImage}
          backgroundColor="#eaf3fe"
        />
        <Project
          to="/case/bos"
          title="Blockers of Scam"
          description="A platform that compliments the existing 'scamBlock' Chrome extension in its goal of reporting potentially dangerous websites and social media profiles."
          imageSrc={BOSImage}
          backgroundColor="#eef9f6"
        />
        <Project
          to="/case/teams-vr"
          title="Teams VR"
          description="An extension for Microsoft Teams to support a better work from home experience."
          imageSrc={TeamsVRImage}
          backgroundColor="#f1f1f5"
        />
        <Project
          to="/case/orygyns"
          title="Origyns"
          description="Something about Origyns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus purus tellus, quis bibendum tellus luctus eu. Nunc elementum vel tortor sit amet posuere. Nulla eleifend efficitur mauris eget iaculis. Curabitur fringilla pulvinar massa nec maximus. "
          imageSrc={OrigynsImage}
          backgroundColor="#fcf2f0"
          inProgress
        />
      </Container>
    </>
  );
};

export default Home;
