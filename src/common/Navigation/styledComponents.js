import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { PRIMARY_COLOUR } from '../../theme';

export const NavBar = styled(AppBar)`
  && {
    background: ${({ isMobile }) =>
      isMobile
        ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))'
        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))'};
    height: 92px;
    a {
      color: #333;
      font-weight: 500;
      font-size: ${({ isTablet }) => (isTablet ? '25px' : '14px')};
      margin: 0 30px;
      text-decoration: none;
      text-transform: uppercase;
      &.active {
        color: ${PRIMARY_COLOUR};
        font-weight: 700;
      }
      :hover {
        color: ${PRIMARY_COLOUR};
      }
    }
  }
`;
export const MobileNav = styled.div`
  transition: all 0.1s;
  ${({ isMenuOpen }) => {
    if (isMenuOpen) {
      return `
      background-color: #fff;
      min-height: 100vh;
      `;
    }
    return `
    min-height: 80px;
    `;
  }}
  a.logo {
    margin: 0;
  }
`;

export const MobileNavList = styled.div`
  transition: all 0.1s;
  ${({ isMenuOpen }) => {
    if (isMenuOpen) {
      return `
      min-height: calc(100vh - 76px);
      visibility: visible;
      opacity: 1;
      margin: 80px 0;
      `;
    }
    return `
    min-height: 0;
    height: 0;
    visibility: hidden;
    opacity: 0;
    margin: 0;
    `;
  }}
  ul div {
    display: flex;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 60px;
`;
