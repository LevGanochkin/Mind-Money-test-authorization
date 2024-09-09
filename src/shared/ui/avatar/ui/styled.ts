import { Avatar, Badge, styled } from '@mui/material';
import { AvatarBadgePositionProps } from '../lib/localTypes';

const MainAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  padding: 6,
  backgroundColor: 'white',
}));

const AvatarBadge = styled(Badge)<AvatarBadgePositionProps>(({ theme, positions }) => ({
  width: 100,
  top: positions.top,
  left: positions.left,
}));

export { MainAvatar, SmallAvatar, AvatarBadge };
