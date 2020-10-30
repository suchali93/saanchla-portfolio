import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

export const Header = styled(Box)`
  && {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
      url(${({ background }) => background});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: right;
    @media (max-width: 1280px) {
      text-align: center;
    }
  }
`;

// TODO: Keep?
export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: ${({ open }) => (open ? '1' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: all 0.2s ease;
`;

export const CaseStudyLink = styled(Link)`
  position: relative;
  text-decoration: none;
`;

export const CaseStudyBox = styled(Box)`
  && {
    background-color: ${({ backgroundColor }) => backgroundColor || '#ededed'};
    color: #333333;
  }
`;

export const CaseStudyGridContainter = styled(Grid)`
  && {
    position: relative;
  }
`;

export const CaseStudyContent = styled(Box)`
  && {
    @media (max-width: 960px) {
      text-align: center;
    }
  }
`;

export const CaseStudyImage = styled.img`
  padding: 30px;
`;
