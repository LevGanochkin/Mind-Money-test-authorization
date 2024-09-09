import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
    widescreen: true;
  }
}

export const mainTheme = createTheme({
  breakpoints: { values: { mobile: 360, tablet: 768, desktop: 1440, widescreen: 1920 } },
  palette: {
    background: {
      paper: '#ffffff',
      default: '#F4F4F4',
    },
    primary: {
      main: '#526ED3',
      light: '#A1B1E7',
    },
    secondary: {
      main: '#A6ABB0',
    },
    success: {
      main: '#51D85E',
    },
    error: {
      main: '#EF4E57',
    },
    text: {
      primary: '#101112',
      secondary: '#A6ABB0',
      disabled: '#A6ABB0',
    },
  },
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    button: {
      textTransform: 'initial',
    },
    body1: {},
  },
});
