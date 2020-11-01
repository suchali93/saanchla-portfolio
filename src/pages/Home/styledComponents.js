import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

export const Header = styled(Box)`
  && {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
      url(${({ background }) => background});
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
  }
`;

export const Intro = styled.div`
  font-family: ${({ variant }) =>
    variant === 'italic' ? "'EB Garamond', serif" : "'Oswald', sans-serif"};
  font-size: ${({ variant }) => (variant === 'italic' ? '27px' : '65px')};
  font-style: ${({ variant }) => (variant === 'italic' ? 'italic' : 'normal')};
  font-weight: ${({ variant }) => (variant === 'italic' ? '500' : '400')};
  letter-spacing: ${({ variant }) => (variant === 'italic' ? '1px' : '5px')};
  margin-bottom: 10px;
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

// TODO: Keep?
export const CaseStudyBox = styled(Box)`
  && {
    background-color: ${({ backgroundColor }) => backgroundColor || '#ededed'};
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
