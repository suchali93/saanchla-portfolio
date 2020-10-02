import { Box, Typography } from '@material-ui/core';
import React from 'react';

import BOSImage from '../CaseStudies/BOS/images/Banner.png';
import CultureFitImage from '../CaseStudies/CultureFit/images/Banner.png';
import TeamsVRImage from '../CaseStudies/TeamsVR/images/Banner.png';
import CaseStudy from './CaseStudy';
import './Home.scss';

const Home = () => {
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={7} mb={10}>
        <Typography variant="h4">
          Hello! My name is Sanchala and I’m a UX/UI designer.
        </Typography>
      </Box>
      <CaseStudy
        to="/case/culture-fit"
        title="Culture Fit"
        description="A platform for recruiters to evaluate candidates beyond the resume, by focussing on workplace culture fit."
        imageSrc={CultureFitImage}
      />
      <CaseStudy
        to="/case/bos"
        title="BOS"
        description="Something about BOS. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus purus tellus, quis bibendum tellus luctus eu. Nunc elementum vel tortor sit amet posuere. Nulla eleifend efficitur mauris eget iaculis. Curabitur fringilla pulvinar massa nec maximus. "
        imageSrc={BOSImage}
      />
      <CaseStudy
        to="/case/teams-vr"
        title="Teams VR"
        description="Something about Teams VR. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus purus tellus, quis bibendum tellus luctus eu. Nunc elementum vel tortor sit amet posuere. Nulla eleifend efficitur mauris eget iaculis. Curabitur fringilla pulvinar massa nec maximus. "
        imageSrc={TeamsVRImage}
      />
    </>
  );
};

export default Home;
