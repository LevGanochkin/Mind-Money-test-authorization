import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { mainTheme } from './theme';

const globalStyles = (
  <GlobalStyles
    styles={{
      ':root': {
        '--Radius100': '7.5px',
        '--Radius150': '10px',
        '--16': '16px',
        '--Space150': '12px',
      },
    }}
  />
);

const AppThemeProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {globalStyles}
      {children}
    </ThemeProvider>
  );
};

export { AppThemeProvider };
