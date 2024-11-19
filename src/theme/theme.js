// eslint-disable-next-line import/no-extraneous-dependencies
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    colors: {
      mainfirst: '#F99820',
      mainsecond: '#4366E3',
      buttonclick: '#D6821A',
      lightsecond: '#8EA3EE',
      footercontrast: '#1339C1',
      circle: '#FAAD4D',
      divider: '#D7D7D7',
    },
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 480,
      md: 767,
      lg: 1024,
      xl: 1600,
    },
  },
  typography: {
    const: {
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fontFamily: {
        primary: 'PT Sans, sans-serif',
        secondary: 'Merriweather, serif',
      },
    },
    fontFamily: 'PT Sans, sans-serif',
    fontColor: 'black',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          boxShadow: 'none',
          margin: '0 auto',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          paddingRight: { xs: ' 1.28rem', md: '2.2rem', lg: '3.1rem' },
          paddingLeft: { xs: ' 1.25rem', md: '2rem', lg: '2.8rem' },
          maxWidth: '1600px',
        },
      },
    },
  },
  customUtilities: {},
});

export default theme;
