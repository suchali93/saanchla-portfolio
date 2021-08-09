import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Section = styled.h1`
  font-family: 'Rubik Variable', serif;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

export const SubSection = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const CenteredBox = styled(Box)`
  font-family: 'Rubik Variable', serif;
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  max-width: 7.5rem;
  margin: auto;
  > div {
    font-size: 18px;
  }
`;

export const BannerBox = styled(Box)`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding: ${({ padding }) => padding || '4rem 0'};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Heading = styled.div`
  font-family: 'Rubik Variable', serif;
  ${({ variant, headingType, isMobile }) => {
    if (variant === 'sm' || headingType === 'sm') {
      return `
      font-size: 16px;
      line-height: 2.2;
      letter-spacing: 1px;
      `;
    }
    if (variant === 'md' || headingType === 'md') {
      return `
      font-size: 20px;
      line-height: 2.8;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: ${isMobile ? '5px' : '20px'};
      `;
    }
    if (variant === 'lg' || headingType === 'lg') {
      return `
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
      `;
    }
    return '';
  }};
`;

export const CaseStudyImage = styled.img`
  width: 100%;
  box-sizing: border-box;
`;

export const CaseStudyInfo = styled.div`
  font-size: 18px;
  font-family: 'Rubik Variable', serif;
  font-weight: 400;
  margin: 0 10px 10px 0;
  text-transform: uppercase;
`;

export const CenteredImage = styled.img`
  display: block;
  margin: ${({ margin }) => margin || '40px auto 20px'};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
`;

export const List = styled.ul`
  margin: 0;
  padding-left: ${({ listStyle }) => (listStyle === 'none' ? '0' : '20px')};
  list-style: ${({ listStyle }) => listStyle || 'disc'};
`;

export const ListItem = styled.li`
  margin: ${({ margin }) => margin || '0 0 20px 0'};
`;
