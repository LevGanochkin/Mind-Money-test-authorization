import { AvatarBadgePositionProps, CustomAvatarProps } from '../lib/localTypes';
import { AvatarBadge, MainAvatar, SmallAvatar } from './styled';

export const CustomAvatar = ({
  mainSrc,
  smallSrc,
  positions,
}: CustomAvatarProps & AvatarBadgePositionProps) => {
  return (
    <AvatarBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={<SmallAvatar src={smallSrc} alt={`small-avatar`} />}
      positions={positions}
    >
      <MainAvatar src={mainSrc} alt={`main-avatar`} />
    </AvatarBadge>
  );
};
