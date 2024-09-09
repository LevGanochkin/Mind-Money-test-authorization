import { Typography } from '@mui/material';
import { RulesetType } from '../lib/rules';

export const strengthCheck = (password: string, ruleset: RulesetType) => {
  if (password === '') {
    return passStr['noPass'];
  }

  const result = ruleset.findIndex(elem => elem.status === 'error');
  if (result !== -1) {
    return passStr['weak'];
  }

  return passStr['strong'];
};

export const passStr = {
  strong: (
    <Typography
      variant="button"
      fontWeight={'inherit'}
      fontSize={'inherit'}
      lineHeight={'inherit'}
      color="success"
    >
      Descrpition
    </Typography>
  ),
  weak: (
    <Typography
      variant="button"
      fontWeight={'inherit'}
      fontSize={'inherit'}
      lineHeight={'inherit'}
      color="error"
    >
      Weak password :(
    </Typography>
  ),
  noPass: <></>,
};
