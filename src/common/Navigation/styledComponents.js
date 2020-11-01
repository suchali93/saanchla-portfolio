import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

export const NavBar = styled(AppBar)`
  && {
    a {
      color: #333;
      font-weight: 400;
      margin: 0 30px;
      text-decoration: none;
      text-transform: uppercase;
      &.active {
        color: #4c6ae1;
        font-weight: 600;
      }
      :hover {
        color: #4c6ae1;
      }
    }
  }
`;
export const MobileNav = styled.div`
  a {
    color: #333;
    font-weight: 400;
    margin: 0 50px 0 10px;
    text-decoration: none;
    text-transform: uppercase;
    &.active {
      color: #4c6ae1;
      font-weight: 600;
    }
    :hover {
      color: #4c6ae1;
    }
  }
  .logo {
    margin: 0 0 10px;
  }
`;

export const Logo = styled.img`
  height: 60px;
`;
