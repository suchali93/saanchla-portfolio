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
  },
});

export default theme;
