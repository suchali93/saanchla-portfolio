import styled from 'styled-components';

export const Heading = styled.div`
  font-family: 'Rubik Variable', serif;
  ${({ variant, isMobile }) => {
    if (variant === 'sm') {
      return `
      font-size: 16px;
      line-height: 2.2;
      letter-spacing: 1px;
      `;
    }
    if (variant === 'md') {
      return `
      font-size: 20px;
      line-height: 2.8;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: ${isMobile ? '5px' : '20px'};
      `;
    }
    if (variant === 'lg') {
      return `
      font-size: 35px;
      font-weight: 400;
      line-height: 2;
      margin-bottom: 30px;
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
`;

export const List = styled.ul`
  margin: 0;
  padding-left: ${({ listStyle }) => (listStyle === 'none' ? '0' : '20px')};
  list-style: ${({ listStyle }) => listStyle || 'disc'};
`;

export const ListItem = styled.li`
  margin: ${({ margin }) => margin || '0 0 20px 0'};
`;
