import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1600px) {
    margin-left: 10%;
    margin-right: 10%;
  }
  @media (max-width: 960px) {
    margin: 0;
  }
`;

export const AboutHeading = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 2;
  margin-bottom: 30px;
`;

export const AboutContent = styled.div`
  > p {
    margin-bottom: 20px;
  }
`;
