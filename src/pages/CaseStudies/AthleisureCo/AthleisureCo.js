import React from 'react';
import { Container } from 'react-bootstrap';
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
      <Container className="d-block">
        <Content heading="Overview">Goes here</Content>
        <Content>
          <Text>More details coming soon!</Text>
        </Content>
      </Container>
    </CaseStudy>
  );
};

export default AthleisureCo;
