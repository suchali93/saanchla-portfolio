import React from 'react';
import BannerImage from './images/Banner.png';
import CaseStudy from '..';
import Content from '../Content';

const TeamsVR = () => {
  return (
    <CaseStudy
      myRole="UX Research, UX Strategy, UI Design"
      timeline="3 days"
      imageSrc={BannerImage}
      overview="TeamsVR is a virtual reality extension for Microsoft Teams targeted at young professionals working from home. It brings the office space to you so you can still experience an 'in person' conversation with your colleagues."
    >
      <Content heading="Overview" level={2}>
        TeamsVR is a virtual reality extension for Microsoft Teams targeted at young
        professionals working from home. It brings the office space to you so you can
        still experience an &lsquo;in person&rsquo; conversation with your colleagues.
      </Content>
    </CaseStudy>
  );
};

export default TeamsVR;
