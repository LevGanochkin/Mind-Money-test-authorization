import { Stack, styled, Tab, Tabs } from '@mui/material';

const AuthWidgetContainer = styled(Stack)(({ theme }) => ({
  gap: 40,
  width: 686,
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default,
  padding: '24px 64px 64px 106px',

  [theme.breakpoints.up('widescreen')]: {
    width: 975,
  },
  [theme.breakpoints.between('tablet', 'desktop')]: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    maxWidth: 768,
    padding: '24px 24px 26px 24px',
  },
  [theme.breakpoints.between('mobile', 'tablet')]: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    maxWidth: 360,
    padding: '20px 16px ',
    gap: 24,
  },
}));

const FormHeader = styled(Stack)(({ theme }) => ({
  height: 'fit-content',
  // width: 686,
  // padding: '24px 30px 24px 106px',
  // paddingTop: 24,
  // paddingBottom: 24,

  //   [theme.breakpoints.up('widescreen')]: {
  //     width: 975,
  //     padding: '24px 32px 24px 157px',
  //   },
  //   [theme.breakpoints.down('tablet')]: {
  //     height: 72,
  //     width: '100%',
  //     padding: '24px',
  //   },
  //   [theme.breakpoints.between('mobile', 'tablet')]: {
  //     padding: '20px 16px',
  //   },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: 238,
  height: 44,

  [theme.breakpoints.between('mobile', 'tablet')]: {
    width: 146,
    height: 32,
  },
}));

const FormContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  gap: '48px',
  width: '516px',
  padding: '48px 0',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 'var(--16)',
  border: `1px solid ${theme.palette.background.paper}`,
  alignSelf: 'center',

  [theme.breakpoints.between('tablet', 'desktop')]: {
    padding: '36px 0 114px',
  },
  [theme.breakpoints.between('mobile', 'tablet')]: {
    width: '100%',
    padding: '0 0 16px',
    gap: 30,
  },
}));

const FormTabs = styled(Tabs)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: 4,
  borderRadius: 'var(--Radius150)',

  '& .MuiTabs-indicator': {
    display: 'none',
  },

  '& .MuiTabs-flexContainer	': {
    gap: 8,
    justifyContent: 'space-between',
  },
}));

const FormTab = styled(Tab)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '1rem',
  padding: '0 70px',
  borderRadius: 'var(--Radius150)',
  minHeight: 40,
  width: 210,

  '&.Mui-selected': {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },

  [theme.breakpoints.between('mobile', 'tablet')]: {
    width: 156,
    padding: '0 45px',
  },
}));

export { FormHeader, LogoImage, AuthWidgetContainer, FormContainer, FormTabs, FormTab };
