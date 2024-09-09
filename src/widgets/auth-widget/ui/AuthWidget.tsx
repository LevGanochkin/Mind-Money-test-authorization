import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AuthWidgetContainer, FormHeader, LogoImage } from './styled';
import AuthForm from './AuthForm';
import { CustomLink } from '../../../shared/ui/link';

const AuthWidget = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet'));

  return (
    <AuthWidgetContainer>
      <FormHeader>
        <LogoImage src="./logo.png" alt="Logo" />
      </FormHeader>
      <AuthForm />
      <Stack
        display={isMobile ? 'none' : 'flex'}
        direction={'row'}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 MIND MONEY LIMITED
        </Typography>
        <Typography variant="body2" textAlign={'end'} color="text.secondary">
          Have some issue? <br /> Wrote us &nbsp;
          <CustomLink
            href={
              'mailto:info@mind-money.eu?subject=Hello&body=I%20would%20like%20to%20contact%20you'
            }
            color="primary.main"
            underline="hover"
          >
            info@mind-money.eu
          </CustomLink>
        </Typography>
      </Stack>
    </AuthWidgetContainer>
  );
};

export { AuthWidget };
