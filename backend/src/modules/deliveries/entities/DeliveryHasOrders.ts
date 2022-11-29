import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';

import Order from 'modules/orders/entities/Order';

@Entity('deliveries_has_orders')
export default class DeliveryHasOrders {
  @PrimaryColumn()
  order_id: number;

  @ManyToOne(() => Order, { eager: true })
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @PrimaryColumn()
  delivery_id: number;
}
