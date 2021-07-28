import React from 'react';
import BannerImage from './images/banner.png';
import CaseStudy from '..';
import Content from '../Content';
import { Text } from '../../../common/styledComponents';

const AthleisureCo = () => {
  return (
    <CaseStudy
      myRole="UX Designer"
      tools="Figma, InVision, Sketch"
      timeline="Ongoing"
      platform="Desktop"
      imageSrc={BannerImage}
    >
      <Content heading="Overview">Goes here</Content>
      <Content>
        <Text>More details coming soon!</Text>
      </Content>
    </CaseStudy>
  );
};

export default AthleisureCo;
