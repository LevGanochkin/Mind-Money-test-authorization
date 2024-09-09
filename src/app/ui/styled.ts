import { Container, styled } from '@mui/material';

const AppContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: 1920,
  minWidth: 360,
  margin: '0 auto',
  justifyContent: 'center',
}));

export { AppContainer };
