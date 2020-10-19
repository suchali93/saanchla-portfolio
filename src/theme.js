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
        backgroundColor: '#6d737d',
        borderRadius: 20,
        minHeight: 45,
        minWidth: 200,
        marginTop: 30,
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: '#8a919e',
        },
      },
      text: {
        color: '#fff',
        fontSize: 15,
        padding: '0 20px',
      },
    },
  },
});

export default theme;
