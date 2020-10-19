import React from 'react';
import BannerImage from './images/Banner.png';
import CaseStudy from '..';

const CultureFit = () => {
  return (
    <CaseStudy
      myRole="UX Research, Information Architecture, Wireframing, Prototyping, User Testing, UI Design"
      timeline="10 weeks"
      imageSrc={BannerImage}
    />
  );
};

export default CultureFit;
