import { Typography } from '@mui/material';
import { CustomLink } from '../../../shared/ui/link';
import { CheckboxText } from './styled';

export const CheckBoxLabel = () => {
  return (
    <CheckboxText>
      I accept the&nbsp;
      <CustomLink underline="always" href={'#'}>
        Therms of Use
      </CustomLink>
      &nbsp;and have read&nbsp;
      <CustomLink underline="always" href={'#'}>
        Privacy Policy
      </CustomLink>
    </CheckboxText>
  );
};
