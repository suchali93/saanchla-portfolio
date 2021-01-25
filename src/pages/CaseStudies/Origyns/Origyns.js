import React from 'react';
import BannerImage from './images/Banner.png';
import CaseStudy from '..';
import Content from '../Content';

const Origyns = () => {
  return (
    <CaseStudy
      myRole="UX Designer"
      tools="Figma, InVision, Sketch"
      timeline="Ongoing"
      platform="Desktop"
      imageSrc={BannerImage}
    >
      <Content heading="Overview">
        <b>Our Mission</b> Origyns aims to revolutionize the furniture industry by giving
        Canadians a new and illusive way to shop for their furniture online -- putting
        customization and convenience at the forefront while supporting the local economy.
        <b>Our Vision</b> Why look for the perfect dining table, when you can simply
        create it? Our vision is to create a world where buying furniture is not only easy
        and convenient, but strengthens our natural eye for design by giving us full
        autonomy to customize every furniture piece to our heart’s content.
        <b>Our Values</b> Furniture not only brings comfort and creates memories, but is
        one of the key components when building homes. We believe in helping Canadians
        achieve their sense of ‘home’, no matter how unique their needs are, by allowing
        them to be creative while only purchasing premium-quality furniture that is 100%
        Canadian-made.
      </Content>
    </CaseStudy>
  );
};

export default Origyns;
