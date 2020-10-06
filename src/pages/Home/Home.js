import { Box, Button, Container, Typography } from '@material-ui/core';
import React from 'react';

import CultureFitImage from '../CaseStudies/CultureFit/images/Banner.png';
import BOSImage from '../CaseStudies/BOS/images/Banner.png';
import TeamsVRImage from '../CaseStudies/TeamsVR/images/Banner.png';
import OrygynsImage from '../CaseStudies/Orygyns/images/Banner.png';
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
          <Button mt={10}>CTA</Button>
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
          title="BOS"
          description="Something about BOS. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus purus tellus, quis bibendum tellus luctus eu. Nunc elementum vel tortor sit amet posuere. Nulla eleifend efficitur mauris eget iaculis. Curabitur fringilla pulvinar massa nec maximus. "
          imageSrc={BOSImage}
          backgroundColor="#eef9f6"
        />
        <Project
          to="/case/teams-vr"
          title="Teams VR"
          description="Something about Teams VR. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus purus tellus, quis bibendum tellus luctus eu. Nunc elementum vel tortor sit amet posuere. Nulla eleifend efficitur mauris eget iaculis. Curabitur fringilla pulvinar massa nec maximus. "
          imageSrc={TeamsVRImage}
          backgroundColor="#f1f1f5"
        />
        <Project
          to="/case/orygyns"
          title="Orygyns"
          description="Something about Orygyns. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus purus tellus, quis bibendum tellus luctus eu. Nunc elementum vel tortor sit amet posuere. Nulla eleifend efficitur mauris eget iaculis. Curabitur fringilla pulvinar massa nec maximus. "
          imageSrc={OrygynsImage}
          backgroundColor="#fcf2f0"
        />
      </Container>
    </>
  );
};

export default Home;
