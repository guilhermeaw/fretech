import { Badge } from '@chakra-ui/react';

import { VehicleStatus, VehicleStatusLabel } from '../../../../models/Vehicle';

const badgeColors = {
  IN_USE: 'red',
  AVAILABLE: 'green',
};

type VehicleStatusBadgeProps = {
  status: VehicleStatus;
};

export const VehicleStatusBadge = ({ status }: VehicleStatusBadgeProps) => {
  return (
    <Badge
      colorScheme={badgeColors[status]}
      fontSize="sm"
      fontWeight="bold"
      px="2"
      py="1"
      w="fit-content"
      textTransform="uppercase"
    >
      {VehicleStatusLabel[status]}
    </Badge>
  );
};
