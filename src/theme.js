import { createMuiTheme } from '@material-ui/core';
import './typography/fonts.css';

export const theme = createMuiTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
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
      subtitle2: {
        fontFamily: ['EB Garamond', 'serif'],
        fontWeight: 400,
        fontSize: '27px',
        letterSpacing: '1px',
        fontStyle: 'italic',
      },
    },
    MuiAppBar: {
      root: {
        padding: '10px 0',
      },
      colorPrimary: {
        backgroundColor: '#fff',
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
        minHeight: 45,
        minWidth: 200,
        marginTop: 30,
        boxShadow: 'none',
        transition: 'all 0.1s',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: '#4c6ae1',
          color: '#fff',
        },
      },
      outlined: {
        color: '#4c6ae1',
        border: '2px solid #4c6ae1',
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
