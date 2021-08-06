import React from 'react';
import images from './images';
import CaseStudy from '..';
import Content from '../Content';
import { Text } from '../../../common/styledComponents';
import { ATHLEISURE_CO } from '../../../common/constants';

const AthleisureCo = () => {
  return (
    <CaseStudy
      name={ATHLEISURE_CO}
      myRole="UX Designer"
      tools="Figma, InVision, Sketch"
      timeline="Ongoing"
      platform="Desktop"
      imageSrc={images.topImage}
      result=""
    >
      <Content heading="Overview">Goes here</Content>
      <Content>
        <Text>More details coming soon!</Text>
      </Content>
    </CaseStudy>
  );
};

export default AthleisureCo;
