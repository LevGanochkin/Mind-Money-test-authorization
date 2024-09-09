import { PaletteColor } from '@mui/material';

enum Rules {
  email = 'email',
  length = 'length',
  contain = 'contain',
  capitalize = 'capitalize',
}

export type RuleStatus = 'success' | 'error' | 'undone';

export type RulesetType = {
  id: Rules;
  text: string;
  status: RuleStatus;
}[];

export const initialRules: RulesetType = [
  { id: Rules.email, text: 'Can’t contain e-mail address', status: 'undone' },
  { id: Rules.length, text: 'At least 8 characters', status: 'undone' },
  { id: Rules.contain, text: 'Contains a number or(and) symbol', status: 'undone' },
  { id: Rules.capitalize, text: 'One or more capitalized letter', status: 'undone' },
];
