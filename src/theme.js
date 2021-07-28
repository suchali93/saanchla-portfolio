import { createMuiTheme } from '@material-ui/core';
import './typography/fonts.css';

export const PRIMARY_COLOUR = '#5453dc';

// react bootstrap breakpoints
// xs <576px
// sm ≥576px
// md ≥768px
// lg ≥992px
// xl ≥1200px
// xxl ≥1400px

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: false,
      sm: 0, // <576
      md: 576, // <768
      lg: 768, // <992
      xl: 992, // <1200
      xxl: 1200,
    },
  },
  palette: {
    primary: {
      main: PRIMARY_COLOUR,
      contrastText: '#fff', // button text white instead of black
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'],
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
          fontSize: '18px',
          color: '#333',
          backgroundColor: '#fff',
        },
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '50px',
        fontWeight: 400,
      },
      body1: {
        fontSize: '18px',
        lineHeight: 1.75,
      },
      gutterBottom: {
        marginBottom: '15px',
      },
    },
    MuiAppBar: {
      root: {
        fontFamily: ['Rubik Variable', 'serif'],
        fontWeight: 400,
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
        color: PRIMARY_COLOUR,
        fontWeight: 400,
        transition: 'all 0.2s',
        '&:hover': {
          color: '#4747bb',
          backgroundColor: 'transparent',
          transform: 'scale(1.1)',
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
