import { createMuiTheme } from '@material-ui/core';
import './typography/fonts.css';

export const PRIMARY_COLOUR = '#4c6ae1';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOUR,
      contrastText: '#fff', // button text white instead of black
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'],
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'div',
        body1: 'div',
      },
    },
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
      h1: {
        fontFamily: ['Oswald', 'sans-serif'],
        fontSize: '50px',
        fontWeight: 400,
      },
      body1: {
        lineHeight: 1.75,
      },
      gutterBottom: {
        marginBottom: '15px',
      },
    },
    MuiAppBar: {
      root: {
        fontFamily: ['Montserrat', 'sans-serif'],
        letterSpacing: 1,
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
        letterSpacing: 1,
        marginTop: 30,
        minHeight: 45,
        minWidth: 200,
        transition: 'all 0.1s',
      },
      outlinedPrimary: {
        border: `2px solid ${PRIMARY_COLOUR}`,
        '&:hover': {
          backgroundColor: PRIMARY_COLOUR,
          border: `2px solid ${PRIMARY_COLOUR}`,
          color: '#fff',
          '@media (hover: none)': {
            backgroundColor: PRIMARY_COLOUR,
          },
        },
      },
      outlinedSecondary: {
        backgroundColor: PRIMARY_COLOUR,
        border: `2px solid ${PRIMARY_COLOUR}`,
        color: '#fff',
        '&:hover': {
          backgroundColor: PRIMARY_COLOUR,
          border: `2px solid ${PRIMARY_COLOUR}`,
          color: '#fff',
          '@media (hover: none)': {
            backgroundColor: PRIMARY_COLOUR,
          },
        },
      },
    },
    MuiIconButton: {
      root: {
        color: '#000',
        fontFamily: ['Oswald', 'sans-serif'],
        fontWeight: 400,
        transition: 'all 0.2s',
        '&:hover': {
          backgroundColor: 'transparent',
          transform: 'scale(1.5)',
        },
      },
      sizeSmall: {
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
    },
    MuiDivider: {
      middle: {
        maxWidth: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    MuiPaper: {
      root: {
        height: '100%',
      },
    },
  },
});

export default theme;
