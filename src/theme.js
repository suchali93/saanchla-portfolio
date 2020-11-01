import { createMuiTheme } from '@material-ui/core';
import './typography/fonts.css';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
    colorPrimary: '#333',
    colorSecondar: '#fff',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontWeight: 400,
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#fff',
        },
      },
    },
    MuiTypography: {
      h3: {
        fontFamily: ['Oswald', 'sans-serif'],
      },
      h4: {
        fontFamily: ['Oswald', 'sans-serif'],
      },
    },
    MuiAppBar: {
      root: {
        fontFamily: ['Oswald', 'sans-serif'],
        padding: '10px 0',
      },
      colorPrimary: {
        backgroundColor: 'transparent',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))',
        fontSize: '14px',
      },
    },
    MuiContainer: {
      maxWidthLg: {
        '@media (min-width: 1280px)': {
          maxWidth: '1100px',
        },
      },
    },
    MuiButton: {
      root: {
        backgroundColor: '#fff',
        borderRadius: 5,
        boxShadow: 'none',
        fontFamily: ['Oswald', 'sans-serif'],
        fontWeight: 400,
        marginTop: 30,
        minHeight: 45,
        minWidth: 200,
        transition: 'all 0.1s',
      },
      outlinedPrimary: {
        border: '2px solid #4c6ae1',
        '&:hover': {
          backgroundColor: '#4c6ae1',
          border: '2px solid #4c6ae1',
          color: '#fff',
        },
      },
      outlinedSecondary: {
        backgroundColor: '#4c6ae1',
        border: '2px solid #4c6ae1',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#4c6ae1',
          border: '2px solid #4c6ae1',
          color: '#fff',
        },
      },
    },
    MuiIconButton: {
      root: {
        color: '#000',
        transition: 'all 0.2s',
        '&:hover': {
          backgroundColor: 'transparent',
          transform: 'scale(1.5)',
        },
      },
    },
  },
});

export default theme;
