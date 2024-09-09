import { Box, Stack, styled } from '@mui/material';

const BannerContainer = styled(Box)(({ theme }) => ({
  width: 755,
  height: 1080,
  backgroundColor: theme.palette.primary.main,
  backgroundImage: 'url(./back.png)',
  backgroundSize: 'cover',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',

  [theme.breakpoints.up('widescreen')]: {
    width: 945,
  },
  [theme.breakpoints.between('mobile', 'desktop')]: {
    display: 'none',
  },
}));

const BannerTitleWrapper = styled(Stack)(({ theme }) => ({
  gap: 24,
  margin: '156px 0 0 64px',
}));

const GraphImage = styled('img')(({ theme }) => ({
  width: 621,
  height: 581,
  alignSelf: 'flex-end',
  left: 80,

  [theme.breakpoints.up('widescreen')]: {
    width: 672,
  },
}));

export { BannerContainer, BannerTitleWrapper, GraphImage };
