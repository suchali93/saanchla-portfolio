import styled from 'styled-components';

export const Heading = styled.div`
  font-family: 'Oswald', sans-serif;
  ${({ variant }) => {
    if (variant === 'sm') {
      return `
      font-size: 18px;
      line-height: 2.2;
      letter-spacing: 1px;
      text-transform: uppercase;
      `;
    }
    if (variant === 'md') {
      return `
      font-size: 25px;
      line-height: 2.8;
      letter-spacing: 1px;
      text-transform: uppercase;
      `;
    }
    if (variant === 'lg') {
      return `
      font-size: 35px;
      font-weight: 400;
      line-height: 2;
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
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  margin: 0 10px 10px 0;
  text-transform: uppercase;
`;
