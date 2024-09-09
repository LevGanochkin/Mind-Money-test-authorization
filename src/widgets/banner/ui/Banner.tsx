import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { BannerContainer, BannerTitleWrapper, GraphImage } from './styled';
import { CustomAvatar } from '../../../shared/ui/avatar';

const Banner = () => {
  const theme = useTheme();
  const isWidescreen = useMediaQuery(theme.breakpoints.up('widescreen'));

  return (
    <BannerContainer>
      <BannerTitleWrapper>
        <Typography variant="h1" color="white">
          Start Investing in global stock markets
        </Typography>
        <Typography variant="body1" color="white">
          Mind.money.eu is the easiest place to invest your money and become a rich guy. <br />
          Sign up and get started today free trial fo 14 days!
        </Typography>
      </BannerTitleWrapper>
      <Stack>
        <CustomAvatar
          mainSrc="./hood.png"
          smallSrc="./chart.png"
          positions={{ top: 150, left: isWidescreen ? 689 : 518 }}
        />
        <CustomAvatar
          mainSrc="./glasses.png"
          smallSrc="./money.png"
          positions={{ top: 375, left: isWidescreen ? 222 : 82 }}
        />
        <GraphImage src={'./graph.png'} alt="graph" />
      </Stack>
    </BannerContainer>
  );
};

export { Banner };
