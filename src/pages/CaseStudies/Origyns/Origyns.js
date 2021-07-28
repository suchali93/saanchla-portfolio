import React from 'react';
import BannerImage from './images/banner.png';
import CaseStudy from '..';
import Content from '../Content';
import { Text } from '../../../common/styledComponents';

const Origyns = () => {
  return (
    <CaseStudy
      myRole="UX Research, Usability Testing, Design Strategy, UI Design"
      tools="Figma, Sketch, Invision"
      timeline="4 months"
      platform="Desktop"
      imageSrc={BannerImage}
    >
      <Content heading="Overview">
        A luxury furniture e-commerce website that allows users to confidently create and
        shop fully customizable furniture online, while supporting the local Canadian
        economy.
      </Content>
      <Content>
        <Text>More details coming soon!</Text>
      </Content>
    </CaseStudy>
  );
};

export default Origyns;
