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
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: '#4c6ae1',
          color: '#fff',
        },
      },
      text: {
        color: '#4c6ae1',
        border: '2px sold #4c6ae1',
        fontSize: 15,
        padding: '0 20px',
      },
    },
  },
});

export default theme;
