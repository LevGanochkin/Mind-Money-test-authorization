import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

const FormBody = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
  width: '100%',
  padding: '0 32px',

  [theme.breakpoints.between('mobile', 'desktop')]: {
    padding: 0,
    gap: 36,
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  height: '48px',
  color: 'white',
  borderRadius: 'var(--Radius100)',
  boxShadow: 'none',
  fontSize: '1rem',

  '&.Mui-disabled': {
    backgroundColor: theme.palette.primary.light,
    color: 'white',
  },
}));

const CheckboxText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',

  [theme.breakpoints.between('mobile', 'tablet')]: {
    fontSize: '0.75rem',
  },
}));

const Ruleset = styled(List)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
}));

const RulesetItem = styled(ListItem)(({ theme, color }) => ({
  color: color,
}));

const RulesetIconWrapper = styled(ListItemIcon)(({ theme }) => ({
  color: 'inherit',
  minWidth: 24,
}));

const RulesetText = styled(ListItemText)(({ theme }) => ({
  margin: 0,
  color: 'inherit',
  '& .MuiTypography-root': {
    fontSize: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
  },
}));

const GenerateButton = styled(Button)(({ theme }) => ({
  minWidth: 78,
  height: 32,
  padding: '8px 12px',
  borderRadius: 'var(--Radius100)',
  border: `1px solid ${theme.palette.secondary.main} `,
  fontSize: '0.75rem',
  fontWeight: 600,
  lineHeight: 1.16,
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

export {
  FormBody,
  SubmitButton,
  RulesetIconWrapper,
  RulesetText,
  Ruleset,
  RulesetItem,
  GenerateButton,
  CheckboxText,
};
