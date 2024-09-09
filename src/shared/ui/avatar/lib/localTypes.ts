import { BadgeProps } from '@mui/material';

export type CustomAvatarProps = {
  mainSrc: string;
  smallSrc: string;
};

export interface AvatarBadgePositionProps extends BadgeProps {
  positions: {
    top: number | string;
    left: number | string;
  };
}
