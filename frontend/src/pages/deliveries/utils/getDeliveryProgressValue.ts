import { Order, OrderStatus } from '../../../models/Order';

export const getDeliveryProgressValue = (deliveryOrders: Order[]) => {
  const finishedStatuses = [OrderStatus.DELIVERED, OrderStatus.CANCELED];

  const total = deliveryOrders.length;
  const finished = deliveryOrders.filter(order =>
    finishedStatuses.includes(order.status),
  ).length;

  return (finished / total) * 100;
};
