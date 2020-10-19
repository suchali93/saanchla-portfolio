import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#fff',
        },
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
  },
});

export default theme;
