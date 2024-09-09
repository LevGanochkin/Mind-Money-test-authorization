import { Link, styled } from '@mui/material';

export const CustomLink = styled(Link)(({ theme }) => ({
  textDecorationColor: theme.palette.primary.main,
}));
