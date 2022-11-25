import { Button, HStack } from '@chakra-ui/react';
import { Delivery } from '../../../models/Delivery';
import { useUpdateDelivery } from '../../../services/mutations';

type DeliveryStatusButtonsProps = {
  delivery: Delivery;
};

export const DeliveryStatusButtons = ({
  delivery,
}: DeliveryStatusButtonsProps) => {
  const { mutate: editDelivery, isLoading } = useUpdateDelivery({});

  const handleUpdateDelivery = (action: 'start' | 'finish') => {
    editDelivery({
      ...delivery,
      deliveryman_id: delivery.deliveryman.id,
      orders_ids: delivery.orders.map(order => order.id),
      vehicle_id: delivery.vehicle.id,
      ...(action === 'start'
        ? { start_date: new Date().toISOString() }
        : { end_date: new Date().toISOString() }),
    });
  };

  const hasStartedDelivery = !!delivery.start_date;
  const hasEndedDelivery = !!delivery.end_date;

  const isStartDeliveryButtonDisabled = hasStartedDelivery || hasEndedDelivery;
  const isEndDeliveryButtonDisabled = !hasStartedDelivery || hasEndedDelivery;

  return (
    <HStack>
      <Button
        colorScheme="brand"
        isLoading={isLoading}
        disabled={isStartDeliveryButtonDisabled}
        onClick={() => handleUpdateDelivery('start')}
      >
        Iniciar entrega
      </Button>

      <Button
        colorScheme="brand"
        isLoading={isLoading}
        disabled={isEndDeliveryButtonDisabled}
        onClick={() => handleUpdateDelivery('finish')}
      >
        Finalizar entrega
      </Button>
    </HStack>
  );
};
