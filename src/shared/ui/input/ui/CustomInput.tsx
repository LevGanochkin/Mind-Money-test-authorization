import { styled, TextField } from '@mui/material';

const CustomInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    [theme.breakpoints.between('mobile', 'tablet')]: {
      fontSize: '0.875rem',
      '&.Mui-focused': {
        fontSize: '0.75rem',
      },
    },
  },
  '& .MuiFormHelperText-root': {
    margin: 0,
    lineHeight: 1.33,
    marginTop: 4,
  },
  '& .MuiFilledInput-root': {
    height: 56,
    overflow: 'hidden',
    borderRadius: 'var(--Radius100)',
    border: '1px solid',
    backgroundColor: theme.palette.background.paper,
    borderColor: '#DCDEE0',
    '&::before': {
      display: 'none',
    },
    '&::after': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-error': {
      borderColor: theme.palette.error.main,
    },

    [theme.breakpoints.between('mobile', 'tablet')]: {
      height: 48,
      fontSize: '0.875rem',
    },
  },
}));

export { CustomInput };
