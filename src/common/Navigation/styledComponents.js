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
      padding-bottom: 5px;
      color: #000;
      font-size: ${({ $showHamburger }) => ($showHamburger ? '25px' : '14px')};
      margin: 0 30px;
      text-decoration: none;
      &.active {
        border-bottom: 2px solid ${PRIMARY_COLOUR};
      }
      &.logo {
        border: none;
      }
      :hover {
        color: ${PRIMARY_COLOUR};
      }
      @media (max-width: 767.95px) {
        &.active {
          color: ${PRIMARY_COLOUR};
          border: none;
          font-weight: 600;
        }
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
