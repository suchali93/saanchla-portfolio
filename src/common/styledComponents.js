import styled from 'styled-components';
import { PRIMARY_COLOUR } from '../theme';

export const P = styled.p`
  margin-top: 30px;
  font-size: ${({ size }) => size || '18px'};
`;

export const Link = styled.a`
  color: ${PRIMARY_COLOUR};
`;

export const Text = styled.p`
  font-size: 40px;
  line-height: 1.2;
  margin-top: 50px;
  text-align: center;
`;

export const Heading = styled.div`
  ${({ font }) => {
    if (font === 'rubik') {
      return "font-family: 'Rubik Variable', serif;";
    }
    return '';
  }}
  font-size: ${({ size }) => size || '24px'};
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color }) => (color === 'light' ? '#4A4A4A' : '#000')};
`;
