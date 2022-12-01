import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

import Order from '../../orders/entities/Order';

@Entity('occurrences')
export default class Occurrence {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column()
  order_id: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Order, { eager: true })
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
