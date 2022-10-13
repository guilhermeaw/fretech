import { Badge } from '@chakra-ui/react';

import { OrderStatus, OrderStatusLabel } from '../../../../models/Order';

const badgeColors = {
  PENDING: 'yellow',
  CANCELED: 'red',
  DELIVERED: 'green',
  WITHDRAWN: 'blue',
  IN_PROGRESS: 'purple',
};

type OrderStatusBadgeProps = {
  status: OrderStatus;
};

export const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
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
      {OrderStatusLabel[status]}
    </Badge>
  );
};
