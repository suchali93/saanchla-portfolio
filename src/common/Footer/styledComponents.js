import styled from 'styled-components';
import { FOOTER_HEIGHT } from '../constants';

export const FooterWrapper = styled.footer`
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  height: ${FOOTER_HEIGHT};
`;
