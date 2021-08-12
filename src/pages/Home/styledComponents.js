import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const CaseStudyTitle = styled.div`
  position: absolute;
  left: 32px;
`;

export const CaseStudyContent = styled(Box)`
  min-height: 400px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.04);
  }
`;

export const CaseStudyImage = styled.img`
  max-height: 300px;
  max-width: 430px;
  @media (min-width: 990px) and (max-width: 1200px) {
    max-height: 270px;
    max-width: 390px;
  }
  @media (max-width: 576px) {
    max-height: 270px;
    max-width: 330px;
  }
  @media (max-width: 420px) {
    max-height: 250px;
    max-width: 300px;
  }
`;

export const CaseStudyHover = styled.a``;
