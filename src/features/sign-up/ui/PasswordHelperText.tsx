import { CloseRounded, DoneRounded } from '@mui/icons-material';
import { Stack, Typography, useTheme } from '@mui/material';
import { FieldError } from 'react-hook-form';
import { strengthCheck } from './PasswordStrength';
import { Ruleset, RulesetIconWrapper, RulesetText, RulesetItem } from './styled';
import { useEffect, useState } from 'react';
import { initialRules, RuleStatus } from '../lib/rules';
import { checkPassword } from '../lib/checkPassword';

type PasswordHelperTextProps = {
  fieldError: FieldError | undefined;
  passwordWatch: string;
  emailWatch: string;
};

const PasswordHelperText: React.FC<PasswordHelperTextProps> = ({ passwordWatch, emailWatch }) => {
  const { palette } = useTheme();
  const [ruleset, setRuleset] = useState(initialRules);

  useEffect(() => {
    if (passwordWatch) {
      const checks = checkPassword(passwordWatch, emailWatch);
      const newRuleset = ruleset.map(elem => ({
        ...elem,
        status: checks[elem.id] ? ('success' as RuleStatus) : ('error' as RuleStatus),
      }));
      setRuleset(newRuleset);
    } else setRuleset(initialRules);
  }, [passwordWatch, emailWatch]);

  return (
    <Stack gap={1}>
      <Typography color="text.secondary" fontSize={'0.75rem'} lineHeight={'inherit'}>
        Password strenght:&nbsp;
        {strengthCheck(passwordWatch, ruleset)}
      </Typography>
      <Ruleset disablePadding>
        {ruleset.map(elem => (
          <RulesetItem
            key={elem.id}
            color={
              elem.status === 'undone'
                ? 'inherit'
                : elem.status === 'success'
                ? palette.success.main
                : palette.error.main
            }
            disableGutters
            disablePadding
          >
            <RulesetIconWrapper>
              {elem.status === 'success' ? (
                <DoneRounded sx={{ fontSize: 16 }} />
              ) : (
                <CloseRounded sx={{ fontSize: 16 }} />
              )}
            </RulesetIconWrapper>
            <RulesetText>{elem.text}</RulesetText>
          </RulesetItem>
        ))}
      </Ruleset>
    </Stack>
  );
};

export default PasswordHelperText;
