import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
  } from 'typeorm';

import Order from '../../orders/entities/Order';

@Entity('occurrences')
export default class Occurrence {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @ManyToOne(() => Order, { eager: true })
  @JoinColumn({ name: 'orders_id' })
  vehicle_id: Order;
}
